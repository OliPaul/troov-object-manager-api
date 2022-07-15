import {model, Schema} from "mongoose";
import {IItem} from "../../domain/interfaces/IItem";
import {v4} from "uuid";

const ItemSchema = new Schema<IItem>({
    id: { type: String, required: true, default: v4 },
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
    updatedAt: { type: Date, required: true, default: new Date() }
});

const ItemModel = model<IItem>('Item', ItemSchema);

export {ItemModel};
