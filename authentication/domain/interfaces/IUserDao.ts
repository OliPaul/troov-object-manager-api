import {User} from "../User";

export interface IUserDao {
    createUser(user: User): Promise<User>;
}