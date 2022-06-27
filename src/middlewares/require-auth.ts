import { NextFunction, Request, Response } from "express";
import { NotAutorizedError } from "../errors/not-authorized-error";

export const requireAuth = (req:Request, res:Response, next: NextFunction)=>{
    if(!req.currentUser){
        //forbidden erro (401)
        throw new NotAutorizedError();
    }

    next();
};