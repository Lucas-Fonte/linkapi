import { Router } from 'express';

const routes = new Router();

routes.get('/api', (req, res) => res.json({ ok: true }));

export default routes;
