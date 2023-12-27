import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import authRoutes from './routes/auth.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import specialRoutes from './routes/special.routes';
import routes from './routes';

dotenv.config();
const port = process.env.PORT || 3001;

// initializations
const app = express();

// Multer settings
const storage = multer.memoryStorage();
const upload = multer({ storage });

// settings
app.set('port', port); 

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize()); // need to initialize passport
passport.use(passportMiddleware)

// routes
app.get('/', (req, res) => {
    res.send(`the api is at http://localhost:${port}`);
});

// Ruta para manejar la carga de imágenes
app.post('/api/upload', upload.array('images', 5), (req, res) => {
    // req.files contiene la información de las imágenes cargadas por Multer
    const images = req.files as Express.Multer.File[];
  
    // Aquí puedes procesar las imágenes y guardar las URL en la base de datos
    // Por ejemplo, puedes utilizar Cloudinary para almacenar las imágenes y obtener las URL
  
    // Respuesta de ejemplo
    res.json({ message: 'Imágenes cargadas exitosamente', images });
  });

app.use(authRoutes);
app.use(specialRoutes);
app.use('/', routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
  
  

export default app;