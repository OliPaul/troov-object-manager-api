export class RegisterResponseDto {
    private name?: string;
    private email?: string;


    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}