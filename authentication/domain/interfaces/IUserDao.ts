import {User} from "../User";

export interface IUserDao {
    createUser(user: User): Promise<User>;
    existByEmail(userEmail: string): Promise<boolean>;
}