import {IsEmail, IsNotEmpty, IsString, Matches, MinLength} from "class-validator";
import {Trim} from "class-sanitizer"

export class RegisterRequestDto {
    @IsString({message: "Nom invalide"})
    @IsNotEmpty({message: "Le champ 'nom' est obligatoire"})
    @Trim()
    public name?: string;

    @IsString({message: "Adresse email invalide"})
    @IsNotEmpty({message: "Le champ 'email' est obligatoire"})
    @IsEmail({}, {message: "Adresse email invalide"})
    @Trim()
    public email?: string;

    @IsString({message: "Mot de passe invalide"})
    @IsNotEmpty({message: "Le champ 'password' est obligatoire"})
    @MinLength(8, {message: "Le mot de passe doit contenir au moins 8 caractères"})
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'Mot de passe trop faible. Il doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial'})
    @Trim()
    public password?: string;
}