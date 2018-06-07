import { Router } from 'express';
import oauth from '../config/auth';
import * as auth from '../services/auth';

const routes = Router();

routes.post('/register', (req, res) => {
  const { shopId } = req.body;
  const store = auth.registerStore(shopId);

  res.json(store);
});

routes.post('/oauth/authorize', oauth.authorize());
routes.post('/oauth/token', oauth.token());
routes.post('/login', oauth.token());

export default routes;
