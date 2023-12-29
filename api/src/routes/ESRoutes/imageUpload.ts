// routes/ESRoutes/imageUload.ts

import { Router, Request, Response, NextFunction } from 'express';
import { ESImgUloadController } from '../../controllers/ESControllers/ESImgUploadController';
import { connectToExploserviceDB, RequestWithDBConnection } from '../../middlewares/dbMiddleware';

const ESRouter = Router();

ESRouter.use((req: Request, res: Response, next: NextFunction) => {
  connectToExploserviceDB(req as RequestWithDBConnection, res, next);
});

ESRouter.post('/upload', ESImgUloadController);

export default ESRouter;
