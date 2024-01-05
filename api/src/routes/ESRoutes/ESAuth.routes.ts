import { Router } from 'express';
import { ESsignUp, ESLogIn } from '../../controllers/ESControllers/ESuser.controller';

const ESRouter = Router();

ESRouter.post('/signup', ESsignUp);
ESRouter.post('/loging', ESLogIn);

export default ESRouter