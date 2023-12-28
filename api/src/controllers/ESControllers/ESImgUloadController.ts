// servicio.controller.ts
import { Request, Response } from 'express';
import cloudinary from '../../config/cloudinary'; // Ajusta la ruta según tu estructura
import Servicio from '../../models/ESModels/ESImgUlodaModel'; // Ajusta la ruta según tu estructura

// Controlador para manejar la carga de imágenes y guardar en MongoDB
export const ESImgUloadController = async (req: Request, res: Response) => {
    try {
        // Obtener imágenes desde Multer
        const images = req.files as Express.Multer.File[];

        // Subir imágenes a Cloudinary
        const uploadedImageUrls = await Promise.all(
            images.map(async (image) => {
                const result = await cloudinary.uploader.upload(image.buffer.toString('base64'));
                return result.url;
            })
        );

        // Crear un nuevo servicio con datos y URLs de imágenes
        const nuevoServicio = new Servicio({
            title: req.body.title,
            description: req.body.description,
            imageUrls: uploadedImageUrls,
        });

        // Guardar el servicio en MongoDB
        await nuevoServicio.save();

        res.json({ message: 'Imágenes cargadas y servicio guardado exitosamente' });
    } catch (error) {
        console.error('Error al cargar servicio:', error);
        res.status(500).json({ error: 'Error al cargar servicio' });
    }
};
