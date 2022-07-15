import {User} from "../../domain/User";
import {IUserDao} from "../../domain/interfaces/IUserDao";
import {UserMapper} from "../mapper/UserMapper";
import {UserModel} from "../schemas/UserSchema";

export class UserDao implements IUserDao {

    async createUser(user: User): Promise<User> {
        const userRepository = new UserModel(user.serialize());
        await userRepository.save();

        return UserMapper.mapDaoDocument(userRepository);
    }

}