import {UserDao} from "../dao/UserDao";
import {Router, Request, Response} from 'express';
import dtoValidation from "../../../utils/dto/dtoValidation";
import HttpException from "../../../exceptions/HttpException";
import {SignInRequestDto} from "../dto/SignInRequestDto";
import {SignInUser} from "../../use_cases/SignInUser";

let router = Router();

module.exports = router.post('/', dtoValidation(SignInRequestDto), async function (req: Request, res: Response) {
    const signInRequestDto = new SignInRequestDto();
    signInRequestDto.email = req.body.email;
    signInRequestDto.password = req.body.password;

    try {
        res.send(await new SignInUser().execute(signInRequestDto, new UserDao()));
    } catch (e: any) {
        const exception = (e as HttpException);
        res.status(400).send({error: e.message});
    }
});
