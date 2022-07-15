import {model, Schema} from "mongoose";
import {IUser} from "../../domain/interfaces/IUser";

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true}
});

const UserModel = model<IUser>('User', UserSchema);

export {UserModel};
