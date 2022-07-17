import {IItemDao} from "../domain/interfaces/IItemDao";
import {ItemResponseDto} from "../infra/dto/ItemResponseDto";
import {Item} from "../domain/Item";
import {UpdateItemRequestDto} from "../infra/dto/UpdateItemRequestDto";

export class UpdateItem {
    async execute(itemId: string, updateItemRequestDto: UpdateItemRequestDto, itemDao: IItemDao): Promise<ItemResponseDto> {
        let item: Item = await itemDao.update(itemId, updateItemRequestDto.toJson());

        return new ItemResponseDto(item.name, item.description, item.id, item.createdAt, item.updatedAt);
    }
}