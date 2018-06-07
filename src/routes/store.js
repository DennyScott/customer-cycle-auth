import { Router } from 'express';
import { getStoreById, getStoreFromAuthToken } from '../services/store';

const routes = Router();

routes.get('/store/:id', (req, res) => {
  getStoreById(req.params.id).then(store => res.json(store));
});

routes.get('/me', (req, res) => {
  getStoreByAuthToken(req.token).then(store => res.json(store));
});

export default routes;
