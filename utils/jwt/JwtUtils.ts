import jwt from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import HttpException from "../../exceptions/HttpException";

export class JwtUtils {
    static sign(type: any): string {
        return jwt.sign(type, process.env.JWT_SECRET || "", {
            expiresIn: '2 days'
        });
    }

    static verify(req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.header("Authorization")?.split(" ")[1];
            if (!token) {
                res.status(401).send(new HttpException(401, "Veuillez vous authentifier svp.").serialize());
                return;
            }

            jwt.verify(token, process.env.JWT_SECRET || "");
            next();
        } catch (e) {
            res.status(401).send(new HttpException(401, "Veuillez vous authentifier svp.").serialize())
        }
    }
}