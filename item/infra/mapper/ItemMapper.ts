import {HydratedDocument, LeanDocument} from "mongoose";
import {IItem} from "../../domain/interfaces/IItem";
import {Item} from "../../domain/Item";
import {ItemRequestDto} from "../dto/ItemRequestDto";

export class ItemMapper {
    static mapDaoDocument(itemDocument: HydratedDocument<IItem>): Item {
        return new Item(itemDocument.description, itemDocument.name, itemDocument.id, itemDocument.createdAt, itemDocument.updatedAt);
    }

    static mapDaoLeanDocument(itemDocument: LeanDocument<IItem>): Item {
        return new Item(itemDocument.description, itemDocument.name, itemDocument.id, itemDocument.createdAt, itemDocument.updatedAt);
    }

    static mapItemRequestDto(itemRequestDto: ItemRequestDto): Item {
        return new Item(itemRequestDto.description!, itemRequestDto.name!);
    }
}