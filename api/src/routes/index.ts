import { Router } from 'express';
import postEAContact from '../controllers/EAControllers/postEAContact';


const routes = Router();

routes.post('/exploagro/contact', postEAContact);

export default routes;