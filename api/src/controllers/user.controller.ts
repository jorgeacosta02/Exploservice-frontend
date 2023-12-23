import { Request, Response } from "express";
import User, { IUser } from "../models/user";


export const signUp = async (req: Request, res: Response) => {
    if(!req.body.email || !req.body.password){
        return res.status(400).json({msg: 'Por favor envíe su correo y contraseña.'});
    }
    
    const user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({msg: 'El usuario ya existe.'})
    }

    const newUser = new User (req.body);
    await newUser.save();
    return res.status(201).json(newUser);
}

export const logIn = (req: Request, res: Response) => {
    res.send('logIn');
}