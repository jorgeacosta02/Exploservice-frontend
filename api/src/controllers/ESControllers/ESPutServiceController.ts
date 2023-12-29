import { Request, Response } from 'express';
// import cloudinary from '../../config/cloudinary'; // Ajusta la ruta según tu estructura
import Service from '../../models/ESModels/ESServiceModel'; // Ajusta la ruta según tu estructura

// Controlador para manejar la carga de imágenes y guardar en MongoDB
export const ESPostServiceController = async (req: Request, res: Response) => {
    try {

        // Crear un nuevo servicio con datos y URLs de imágenes
        const newService = new Service({
            title: req.body.title,
            description: req.body.description,
            imageUrls: req.body.images,
        });

        // Guardar el servicio en MongoDB
        await newService.save();

        res.json({ message: 'Servicio guardado exitosamente' });
    } catch (error) {
        console.error('Error al cargar servicio:', error);
        
        if (error instanceof Error) {
            // Si error es del tipo Error, usar el mensaje de error
            res.status(500).json({ error: 'Error al cargar servicio', details: error.message });
        } else {
            // En caso contrario, manejar el error de manera genérica
            res.status(500).json({ error: 'Error al cargar servicio', details: 'Detalles del error desconocidos' });
        }
    }
};
