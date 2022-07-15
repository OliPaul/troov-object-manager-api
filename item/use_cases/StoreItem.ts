import {ItemRequestDto} from "../infra/dto/ItemRequestDto";
import {IItemDao} from "../domain/interfaces/IItemDao";
import {ItemResponseDto} from "../infra/dto/ItemResponseDto";
import {ItemMapper} from "../infra/mapper/ItemMapper";
import {Item} from "../domain/Item";

export class StoreItem {
    async execute(itemRequestDto: ItemRequestDto, itemDao: IItemDao): Promise<ItemResponseDto> {

        let item: Item = ItemMapper.mapItemRequestDto(itemRequestDto);
        item = await itemDao.store(item);

        return new ItemResponseDto(item.name, item.description, item.id, item.createdAt, item.updatedAt);
    }
}