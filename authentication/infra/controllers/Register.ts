import {UserDao} from "../dao/UserDao";
import {Router, Request, Response} from 'express';
import {RegisterRequestDto} from "../dto/RegisterRequestDto";
import {RegisterNewUser} from "../../use_cases/RegisterNewUser";
import dtoValidation from "../../../utils/dto/dtoValidation";
import HttpException from "../../../exceptions/HttpException";

let router = Router();

module.exports = router.post('/', dtoValidation(RegisterRequestDto), async function (req: Request, res: Response) {
    const registerRequestDto = new RegisterRequestDto();
    registerRequestDto.email = req.body.email;
    registerRequestDto.name = req.body.name;
    registerRequestDto.password = req.body.password;

    try {
        res.send(await new RegisterNewUser().execute(registerRequestDto, new UserDao()));
    } catch (e) {
        const exception = (e as HttpException);
        res.status(exception.status).send(exception.serialize());
    }
});
