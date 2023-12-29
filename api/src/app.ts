// Dos bases de datos con asyn await

import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import ESRoutes from './routes/ESRoutes/ESRoutes';

import './database';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

// settings
app.set('port', port);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(passport.initialize());
// passport.use(passportMiddleware);

// Rutas
// app.get('/', (req: Request, res: Response) => {
//     res.send(`la api está en http://localhost:${port}`)
// })

app.use('/exploservice', ESRoutes);

// app.use(authRoutes);
// app.use(specialRoutes);
// app.use('/', routes);

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.error(err.stack);
//     res.status(500).json({ error: 'Error al cargar servicio', details: err.message });
// });

export default  app;