const jwt = require('jsonwebtoken');
const { getBearerToken } = require('../helpers/auth/index');

const { Image, SessionKey, User } = require('../models/');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const payload = jwt.verify(getBearerToken(token), process.env.JWT_SECRET);
    console.log('payload', payload);

    return User.findByPk(payload._id, {
      attributes: ['email', 'first_name', 'last_name', 'user_id', 'role'],
      include: [
        {
          model: Image,
          attributes: ['secure_url'],
        },
      ],
    }).then(user => {
      req.user = user;
      req.user._id = user.user_id;
      req.token = getBearerToken(token);

      next();
    });
  } catch (error) {
    res.status(404).json({ error: 'AUTH_ERROR' });
  }

  // TODO: use redis to check the tokens
  // first check that the token is valid
  // then check if the token exists or not in redis
  // tokens in redis should only be added when logging in
  // or using a refresh token endpoint
};

const isAllowed = (role, rolesAllowed) => {
  return rolesAllowed.indexOf(role) > -1;
};

const permit = (...allowed) => {
  return (req, res, next) => {
    if (req.user && isAllowed(req.user.role, allowed)) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  };
};

module.exports = { authenticate, permit };
