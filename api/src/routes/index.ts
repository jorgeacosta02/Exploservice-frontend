import { Router } from 'express';
import postESContact from '../controllers/ESControllers/postESContact';
import postEAContact from '../controllers/EAControllers/postEAContact';


const routes = Router();

routes.post('/exploservice/contact', postESContact);
routes.post('/exploagro/contact', postEAContact);

export default routes;