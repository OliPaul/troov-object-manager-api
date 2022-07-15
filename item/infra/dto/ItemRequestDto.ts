import {IsNotEmpty, IsString} from "class-validator";
import {Trim} from "class-sanitizer"

export class ItemRequestDto {
    @IsString({message: "Nom invalide."})
    @IsNotEmpty({message: "Le nom de l'article est obligatoire."})
    @Trim()
    public name?: string;

    @IsString({message: "Description invalide."})
    @IsNotEmpty({message: "La description de l'article est obligatoire."})
    @Trim()
    public description?: string;
}