import {IItemDao} from "../domain/interfaces/IItemDao";

export class DeleteItem {
    async execute(itemId: string, itemDao: IItemDao): Promise<string> {
        return await itemDao.delete(itemId);
    }
}