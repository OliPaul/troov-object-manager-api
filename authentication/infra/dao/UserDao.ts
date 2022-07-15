import {User} from "../../domain/User";
import {IUserDao} from "../../domain/interfaces/IUserDao";
import {UserMapper} from "../mapper/UserMapper";
import {UserModel} from "../schemas/UserSchema";
import {CallbackError, HydratedDocument} from "mongoose";
import {IUser} from "../../domain/interfaces/IUser";
import {compareSync} from "bcryptjs";

export class UserDao implements IUserDao {

    async createUser(user: User): Promise<User> {
        const userRepository = new UserModel(user.serialize());
        await userRepository.save();

        return UserMapper.mapDaoDocument(userRepository);
    }

    existByEmail(userEmail: string): Promise<boolean> {
        return new Promise(((resolve, reject) => {
            UserModel.findOne({email: userEmail}, (_error: CallbackError, user: HydratedDocument<IUser>) => {
                if (!user) {
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        }));
    }

    findUser(userEmail: string, userPassword: string): Promise<User | null> {
        return new Promise(((resolve, _reject) => {
            UserModel.findOne({email: userEmail}, (_error: CallbackError, user: HydratedDocument<IUser>) => {
                if (!user) {
                    resolve(null);
                }

                if (!compareSync(userPassword, user.password)) {
                    resolve(null);
                }

                resolve(UserMapper.mapDaoDocument(user));
            });
        }));
    }

}