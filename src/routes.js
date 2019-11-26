import { Router } from 'express';
import SalesController from './controllers/SalesController';

const routes = new Router();

routes.get('/api', SalesController.index);

export default routes;
