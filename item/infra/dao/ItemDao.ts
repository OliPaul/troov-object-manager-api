import {IItemDao} from "../../domain/interfaces/IItemDao";
import {Item} from "../../domain/Item";
import {ItemModel} from "../schemas/ItemSchema";
import {ItemMapper} from "../mapper/ItemMapper";
import {CallbackError, HydratedDocument} from "mongoose";
import {IItem} from "../../domain/interfaces/IItem";

export class ItemDao implements IItemDao {
    delete(itemId: string): Promise<string> {
        return new Promise(((resolve, reject) => {
            ItemModel.deleteOne({id: itemId}, (error: CallbackError) => {
                if (error) {
                    reject("Unable to delete");
                }
                resolve(itemId);
            });
        }));
    }

    find(): Promise<Item[]> {
        return new Promise(((resolve, _reject) => {
            ItemModel.find({}).lean().then((items) => {
                resolve(items.map(itemDocument => ItemMapper.mapDaoLeanDocument(itemDocument)));
            });
        }));
    }

    async store(item: Item): Promise<Item> {
        item.createdAt = new Date();
        const itemRepository = new ItemModel(item.serialize());

        await itemRepository.save();
        return ItemMapper.mapDaoDocument(itemRepository);
    }

    async update(item: Item): Promise<Item> {
        return new Promise(((resolve, reject) => {
            item.updatedAt = new Date();
            ItemModel.findOneAndUpdate({id: item.id}, item.serialize(), (error: CallbackError, item: HydratedDocument<IItem>) => {
                if (error) {
                    reject("Unable to update");
                }
                resolve(ItemMapper.mapDaoDocument(item))
            });
        }));
    }
}