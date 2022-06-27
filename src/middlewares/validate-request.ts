import { NextFunction, Request, Response } from "express";
import {body, validationResult } from 'express-validator';
import { RequestValidationError } from "../errors/request-validation-error";

export const validateRequest=(req: Request,res: Response,next: NextFunction)=>{

     //validation result
    const error = validationResult(req);

    if(!error.isEmpty()){
        // return res.status(400).send(error.array());
        // throw new Error("Invalid email or password")
        throw new RequestValidationError(error.array());
        // next(new RequestValidationError(error.array()));
    }

    next();
}