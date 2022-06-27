import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

//Option #1: Verifying custom errors using an interface which is implemented by our custom error class.
// interface CustomError{
//     statusCode:number,
//     serializeErrors():{
//         message: string,
//         field?: string
//     }[]
// }
//Option #2 is doing that using abstract class which extends Error and our Error class like requestValidationError further extends our custom abstract class. Abstract class is better way for our case because of its this property:
//1. abstract classes as converted into classes when translated to JS, which means we can use it in 'instanceof' checks.
//Other properties of Abstract class:
//2. Cannot be instantiated
//3. Used to set up requirements for subclasses
export class RequestValidationError extends CustomError{
    statusCode=400;

    constructor(public errors: ValidationError[]){
     super("Field Validation Error");

     //Only doing this because we are extending a built in class Error
     Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    
    serializeErrors(){
        return this.errors.map(error=>{
            return {message: error.msg, field: error.param};
        });
    }
}