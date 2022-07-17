import {IUserDao} from "../domain/interfaces/IUserDao";
import {SignInRequestDto} from "../infra/dto/SignInRequestDto";
import {UserNotFoundException} from "../domain/exceptions/UserNotFoundException";
import {JwtUtils} from "../../utils/jwt/JwtUtils";
import {SignInResponseDto} from "../infra/dto/SignInResponseDto";

export class SignInUser {
    async execute(signInRequestDto: SignInRequestDto, userDao: IUserDao): Promise<SignInResponseDto> {
        const user = await userDao.findUser(signInRequestDto.email!, signInRequestDto.password!);

        if(!user) {
            throw new UserNotFoundException(404, "Identifiants invalides.");
        }

        const token = JwtUtils.sign(user.toJson())
        return new SignInResponseDto(user.name, user.email, token);
    }
}