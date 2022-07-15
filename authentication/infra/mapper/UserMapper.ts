import {IUser} from "../../domain/interfaces/IUser";
import {User} from "../../domain/User";
import {HydratedDocument} from "mongoose";
import {RegisterRequestDto} from "../dto/RegisterRequestDto";
import {hashSync} from "bcryptjs";

export class UserMapper {
    static mapDaoDocument(userDocument: HydratedDocument<IUser>): User {
        return new User(userDocument.email, userDocument.name, userDocument.password);
    }

    static mapRegisterRequestDto(registerRequestDto: RegisterRequestDto): User {
        return new User(registerRequestDto.email!, registerRequestDto.name!, hashSync(registerRequestDto.password!));
    }
}