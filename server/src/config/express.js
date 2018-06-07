import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import bearerToken from 'express-bearer-token';

const app = express();
app.disable('x-powered-by');

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test',
  })
);

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bearerToken());

export default app;
