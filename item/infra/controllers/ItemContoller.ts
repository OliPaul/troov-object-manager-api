import {Router, Request, Response} from 'express';
import dtoValidation from "../../../utils/dto/dtoValidation";
import HttpException from "../../../exceptions/HttpException";
import {ItemRequestDto} from "../dto/ItemRequestDto";
import {StoreItem} from "../../use_cases/StoreItem";
import {ItemDao} from "../dao/ItemDao";
import {JwtUtils} from "../../../utils/jwt/JwtUtils";
import {GetItems} from "../../use_cases/GetItems";

let router = Router();

module.exports = {
    store: router.post('/', JwtUtils.verify, dtoValidation(ItemRequestDto), async function (req: Request, res: Response) {
        const itemRequestDto = new ItemRequestDto();
        itemRequestDto.name = req.body.name;
        itemRequestDto.description = req.body.description;

        try {
            res.send(await new StoreItem().execute(itemRequestDto, new ItemDao()));
        } catch (e) {
            res.status(500).send({error: "Impossible de créer cet article."});
        }
    }),
    find: router.get('/', JwtUtils.verify, async function (req: Request, res: Response) {
        res.send(await new GetItems().execute(new ItemDao()));
    }),
};
