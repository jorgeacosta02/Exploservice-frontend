import { Request, Response } from "express";


export const signUp = (req: Request, res: Response) => {
    res.send('signUp');
}

export const logIn = (req: Request, res: Response) => {
    res.send('logIn');
}