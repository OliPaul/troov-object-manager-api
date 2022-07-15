import {RegisterRequestDto} from "../infra/dto/RegisterRequestDto";
import {User} from "../domain/User";
import {IUserDao} from "../domain/interfaces/IUserDao";
import {UserMapper} from "../infra/mapper/UserMapper";
import {RegisterResponseDto} from "../infra/dto/RegisterResponseDto";
import {UserAlreadyExistException} from "../domain/exceptions/UserAlreadyExistException";

export class RegisterNewUser {
    async execute(registerRequestDto: RegisterRequestDto, userDao: IUserDao): Promise<RegisterResponseDto> {
        const userExist = await userDao.existByEmail(registerRequestDto.email!);

        if(userExist) {
            throw new UserAlreadyExistException(400, "Cette adresse mail est déjà utilisée.");
        }

        let user: User = UserMapper.mapRegisterRequestDto(registerRequestDto);
        user = await userDao.createUser(user);

        return new RegisterResponseDto(user.name, user.email);
    }
}