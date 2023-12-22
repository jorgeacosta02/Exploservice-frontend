import { model, Schema, Document} from "mongoose";
import bcrypt from 'bcrypt';

// extends Document no hace falta, lo puse porque sale en el tutorial
export interface IUser extends Document {
    email: string;
    password: string;
}

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        require: true 
    }
});

// Este método se ejecuta antes de guardar el dato
// Uso una función de ES5 para mantener el scope

userSchema.pre('save', async function (next) {
    const user = this;
    if(!user.isModified('password')) return next()

    await bcrypt.genSalt(10);
})

export default model<IUser>('User', userSchema);