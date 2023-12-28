import { Router } from 'express';
import postContactMe from '../../controllers/EAControllers/postContactMe';

const routes = Router();

routes.post('/contactme', postContactMe);

export default routes;