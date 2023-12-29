// middleware/databaseConnection.ts

import { Request, Response, NextFunction } from 'express';
import { Connection } from 'mongoose'; // Importa la interfaz Connection de mongoose
import { dbESConnection, dbEAConnection } from '../database';

// Extiende la interfaz Request para incluir la propiedad dbConnection
export interface RequestWithDBConnection extends Request {
    dbConnection: Connection;
}

export const connectToExploserviceDB = (req: RequestWithDBConnection, res: Response, next: NextFunction) => {
    req.dbConnection = dbESConnection;
    next();
};

export const connectToExploagroDB = (req: RequestWithDBConnection, res: Response, next: NextFunction) => {
    req.dbConnection = dbEAConnection;
    next();
};
