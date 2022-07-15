import {IItemDao} from "../domain/interfaces/IItemDao";
import {ItemResponseDto} from "../infra/dto/ItemResponseDto";
import {Item} from "../domain/Item";

export class GetItems {
    async execute(itemDao: IItemDao): Promise<ItemResponseDto[]> {
        let itemList: Item[] = await itemDao.find();

        return itemList.map(item =>
            new ItemResponseDto(
                item.name,
                item.description,
                item.id,
                item.createdAt,
                item.updatedAt)
        );
    }
}