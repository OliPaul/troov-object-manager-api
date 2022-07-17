import {Trim} from "class-sanitizer"

export class UpdateItemRequestDto {
    @Trim()
    public name?: string;

    @Trim()
    public description?: string;

    toJson() {
        return {
            name: this.name,
            description: this.description
        }
    }
}