const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const helmet = require('helmet');
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan');
}
require('./config/config');

global.__basedir = __dirname;

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, x-auth'
  );
  res.header('Access-Control-Expose-Headers', 'x-auth');
  next();
});

app.use(helmet());
app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

require('./routes/auth')(app);
require('./routes/fabric')(app);

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, () => {
    console.log(`Server up on ${process.env.PORT}`);
  });
}

module.exports = { app };
