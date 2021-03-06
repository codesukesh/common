import { CustomError } from "./custom-error";

export class NotAutorizedError extends CustomError{
    statusCode: number=401;

    constructor(){
        super("Not authorized");

        Object.setPrototypeOf(this, NotAutorizedError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [
            {
                message:"Not authorized"
            }
        ]
    }
}