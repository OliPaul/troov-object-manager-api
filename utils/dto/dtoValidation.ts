import {RequestHandler, Request, Response} from "express";
import {plainToInstance} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import {sanitize} from "class-sanitizer";
import HttpException from "../../exceptions/HttpException";

function dtoValidation(type: any, skipMissingProperties = false): RequestHandler {

    return (req: Request, res: Response, next) => {
        const dtoObject = plainToInstance(type, req.body);
        validate(dtoObject, {skipMissingProperties}).then(
            (errors: ValidationError[]) => {
                if (errors.length > 0) {
                    // Get the first error encountered
                    const dtoErrors = (Object as any).values(errors[0].constraints)[0];
                    res.status(400).send(new HttpException(400, dtoErrors).toJson());
                } else {
                    // Sanitize the object and call the next middleware
                    sanitize(dtoObject);
                    req.body = dtoObject;
                    next();
                }
            }
        );
    };
}


export default dtoValidation;