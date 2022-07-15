import {Router, Request, Response} from 'express';
import dtoValidation from "../../../utils/dto/dtoValidation";
import {ItemRequestDto} from "../dto/ItemRequestDto";
import {StoreItem} from "../../use_cases/StoreItem";
import {ItemDao} from "../dao/ItemDao";
import {JwtUtils} from "../../../utils/jwt/JwtUtils";
import {GetItems} from "../../use_cases/GetItems";
import {UpdateItemRequestDto} from "../dto/UpdateItemRequestDto";
import {UpdateItem} from "../../use_cases/UpdateItem";
import {DeleteItem} from "../../use_cases/DeleteItem";

let router = Router();

module.exports = {
    store: router.post('/', JwtUtils.verify, dtoValidation(ItemRequestDto), async function (req: Request, res: Response) {
        const itemRequestDto = new ItemRequestDto();
        itemRequestDto.name = req.body.name;
        itemRequestDto.description = req.body.description;

        try {
            res.send(await new StoreItem().execute(itemRequestDto, new ItemDao()));
        } catch (e) {
            res.status(400).send({error: "Impossible de créer cet article."});
        }
    }),
    find: router.get('/', JwtUtils.verify, async function (req: Request, res: Response) {
        res.send(await new GetItems().execute(new ItemDao()));
    }),
    update: router.put('/:itemId', JwtUtils.verify, dtoValidation(UpdateItemRequestDto), async function (req: Request, res: Response) {
        const updateItemRequestDto = new UpdateItemRequestDto();
        updateItemRequestDto.name = req.body.name;
        updateItemRequestDto.description = req.body.description;
        const itemId = req.params.itemId;

        try {
            res.send(await new UpdateItem().execute(itemId, updateItemRequestDto, new ItemDao()));
        } catch (e) {
            res.status(400).send({error: "Impossible de mettre à jour l'article."});
        }
    }),
    delete: router.delete('/:itemId', JwtUtils.verify, async function (req: Request, res: Response) {
        const itemId = req.params.itemId;

        try {
            res.send(await new DeleteItem().execute(itemId, new ItemDao()));
        } catch (e) {
            res.status(400).send({error: "Impossible de supprimer l'article."});
        }
    })
};
