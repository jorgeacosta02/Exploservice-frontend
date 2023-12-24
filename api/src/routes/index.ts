import { Router } from 'express';
import postContactMe from '../controllers/postContactMe';

const routes = Router();

routes.post('/contactme', postContactMe);

export default routes;