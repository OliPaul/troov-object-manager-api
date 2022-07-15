import {Item} from "../Item";

export interface IItemDao {
    store(item: Item): Promise<Item>;
    find(): Promise<Item[]>;
    update(itemId: string, data: Object): Promise<Item>;
    delete(itemId: string): Promise<string>;
}