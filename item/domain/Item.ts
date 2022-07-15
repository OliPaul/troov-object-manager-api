import {IItem} from "./interfaces/IItem";

export class Item implements IItem {
    private _createdAt: Date | undefined;
    private readonly _description: string;
    private _id: string | undefined;
    private readonly _name: string;
    private _updatedAt: Date | undefined;


    constructor(description: string, name: string, id?: string, createdAt?: Date, updatedAt?: Date) {
        this._description = description;
        this._name = name;
        this._id = id;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    serialize(): Object {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }
    }

    get description(): string {
        return this._description;
    }

    get id(): string | undefined {
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

    set id(value: string | undefined) {
        this._id = value;
    }

    set createdAt(value: Date | undefined) {
        this._createdAt = value;
    }

    set updatedAt(value: Date | undefined) {
        this._updatedAt = value;
    }
}