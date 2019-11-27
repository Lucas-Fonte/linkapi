import { Router } from 'express';

import SalesController from './app/controllers/SalesController';
import OpportunityController from './app/controllers/OpportunityController';

const routes = new Router();

routes.get('/api/sales', SalesController.index);
routes.get('/api/opportunities', OpportunityController.index);

export default routes;
