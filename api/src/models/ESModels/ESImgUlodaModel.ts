// servicio.model.ts
import mongoose, { Document } from 'mongoose';

interface IServicio extends Document {
    title: string;
    description: string;
    imageUrls: string[];
}

const servicioSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageUrls: [String],
});

const ESServiceModel = mongoose.model<IServicio>('Servicio', servicioSchema);

export default ESServiceModel;
