// Dos bases de datos con asyn await

import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/index'

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

// Routes
app.use('/', routes);

export default  app;