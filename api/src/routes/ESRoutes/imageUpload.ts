// routes/ESRoutes/imageUload.ts

import { Router, Request, Response, NextFunction } from 'express';
import multer from 'multer';
import { ESImgUloadController } from '../../controllers/ESControllers/ESImgUloadController';
import { connectToExploserviceDB, RequestWithDBConnection } from '../../middlewares/dbMiddleware';

const ESRouter = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

ESRouter.use((req: Request, res: Response, next: NextFunction) => {
  connectToExploserviceDB(req as RequestWithDBConnection, res, next);
});

ESRouter.post('/upload', upload.array('images', 6), ESImgUloadController);

export default ESRouter;
