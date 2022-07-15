import {Router, Request, Response} from 'express';
import dtoValidation from "../../../utils/dto/dtoValidation";
import HttpException from "../../../exceptions/HttpException";
import {ItemRequestDto} from "../dto/ItemRequestDto";
import {StoreItem} from "../../use_cases/StoreItem";
import {ItemDao} from "../dao/ItemDao";
import {JwtUtils} from "../../../utils/jwt/JwtUtils";

let router = Router();

module.exports = {
    store : router.post('/', JwtUtils.verify, dtoValidation(ItemRequestDto), async function (req: Request, res: Response) {
        const itemRequestDto = new ItemRequestDto();
        itemRequestDto.name = req.body.name;
        itemRequestDto.description = req.body.description;

        try {
            res.send(await new StoreItem().execute(itemRequestDto, new ItemDao()));
        } catch (e) {
            console.log(e);
            const exception = (e as HttpException);
            res.status(exception.status).send(exception.serialize());
        }
    }),
};
