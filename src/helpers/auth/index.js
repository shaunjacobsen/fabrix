const bcrypt = require('bcrypt');

export const generatePassword = async plaintext => {
  try {
    return await bcrypt.hash(plaintext, 10);
  } catch (e) {
    return null;
  }
};

export const getBearerToken = token => {
  if (token.startsWith('Bearer ')) {
    const trunc = token.substring(7, token.length);
    return trunc;
  } else {
    return;
  }
};
