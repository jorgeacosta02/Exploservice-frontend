// routes/ESRoutes/imageUload.ts

import { Router, Request, Response, NextFunction } from 'express';
import { ESPostServiceController } from '../../controllers/ESControllers/ESPutServiceController';

const ESRouter = Router();

ESRouter.post('/service', ESPostServiceController);

export default ESRouter;
