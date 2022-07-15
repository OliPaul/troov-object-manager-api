import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {Trim} from "class-sanitizer"

export class SignInRequestDto {

    @IsString({message: "Adresse email invalide"})
    @IsNotEmpty({message: "Le champ 'email' est obligatoire"})
    @IsEmail({}, {message: "Adresse email invalide"})
    @Trim()
    public email?: string;

    @IsString({message: "Mot de passe invalide"})
    @IsNotEmpty({message: "Le champ 'password' est obligatoire"})
    @Trim()
    public password?: string;
}