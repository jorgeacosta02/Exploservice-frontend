// servicio.model.ts
import mongoose, { Document } from 'mongoose';

export interface IService extends Document {
    title: string;
    description: string;
    imageUrls: string[];
}

const serviceSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        require: true,
    },
    description: {
        type: String,
        unique: true,
    },
    imageUrls: [String],
});

export default mongoose.model<IService>('Servicio', serviceSchema);


