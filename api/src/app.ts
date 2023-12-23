import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

dotenv.config();
const port = process.env.PORT || 3001;

// initializations
const app = express();

// settings
app.set('port', port); 

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send(`the api is at http://localhost:${port}`);
});

app.use(authRoutes);

export default app;