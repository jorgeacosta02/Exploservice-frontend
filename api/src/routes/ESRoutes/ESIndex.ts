import { Router } from 'express';
import ESPostContactController from '../../controllers/ESControllers/ESPostContactController';



const ESRoutes = Router();

ESRoutes.post('/exploservice/contact', ESPostContactController);

export default ESRoutes;