import {Item} from "../Item";

export interface IItemDao {
    store(item: Item): Promise<Item>;
    find(): Promise<Item[]>;
    update(item: Item): Promise<Item>;
    delete(itemId: string): Promise<string>;
}