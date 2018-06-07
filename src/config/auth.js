import app from './express';
import OAuthServer from 'express-oauth-server';
import * as authModel from '../services/auth';

const oauth = new OAuthServer({
  model: authModel,
  requireClientAuthentication: { password: false },
});

app.oauth = oauth;

export default oauth;
