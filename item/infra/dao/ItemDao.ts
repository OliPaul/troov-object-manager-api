import {IItemDao} from "../../domain/interfaces/IItemDao";
import {Item} from "../../domain/Item";
import {ItemModel} from "../schemas/ItemSchema";
import {ItemMapper} from "../mapper/ItemMapper";
import {CallbackError, HydratedDocument} from "mongoose";
import {IItem} from "../../domain/interfaces/IItem";

export class ItemDao implements IItemDao {
    delete(itemId: string): Promise<string> {
        return new Promise(((resolve, reject) => {
            ItemModel.findOneAndRemove({id: itemId}, (error: CallbackError, item: HydratedDocument<IItem>) => {
                if (error) {
                    reject("Unable to delete");
                    return;
                }

                if (!item) {
                    reject("Article inconnu");
                    return;
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
        const itemRepository = new ItemModel(item.serialize());

        await itemRepository.save();
        return ItemMapper.mapDaoDocument(itemRepository);
    }

    async update(itemId: string, data: Object): Promise<Item> {
        return new Promise(((resolve, reject) => {
            ItemModel.findOneAndUpdate({id: itemId}, data, {upsert: true, new: true}, (error: CallbackError, item: HydratedDocument<IItem>) => {
                if (error) {
                    reject("Unable to update");
                    return;
                }
                if (!item) {
                    reject("Article inconnu");
                    return;
                }
                resolve(ItemMapper.mapDaoDocument(item));
            });
        }));
    }
}