import {IUser} from "./interfaces/IUser";

export class User implements IUser {
    private readonly _email: string;
    private readonly _name: string;
    private readonly _password: string;

    constructor(email: string, name: string, password: string) {
        this._email = email;
        this._name = name;
        this._password = password;
    }

    toJson(): Object {
        return {
            email: this._email,
            name: this._name,
            password: this._password
        }
    }

    get email(): string {
        return this._email;
    }

    get name(): string {
        return this._name;
    }

    get password(): string {
        return this._password;
    }
}