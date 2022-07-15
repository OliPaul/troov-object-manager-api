export class ItemResponseDto {
    private id?: string;
    private name: string;
    private description: string;
    private createdAt?: Date;
    private updatedAt?: Date;


    constructor(name: string, description: string, id?: string, createdAt?: Date, updatedAt?: Date) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}