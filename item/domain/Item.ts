import {IItem} from "./interfaces/IItem";

export class Item implements IItem {
    private _createdAt: Date | undefined;
    private readonly _description: string;
    private readonly _id: string;
    private readonly _name: string;
    private _updatedAt: Date | undefined;


    constructor(description: string, id: string, name: string) {
        this._description = description;
        this._id = id;
        this._name = name;
    }

    get description(): string {
        return this._description;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }


    get createdAt(): Date | undefined {
        return this._createdAt;
    }

    get updatedAt(): Date | undefined {
        return this._updatedAt;
    }

    set createdAt(value: Date | undefined) {
        this._createdAt = value;
    }


    set updatedAt(value: Date | undefined) {
        this._updatedAt = value;
    }
}