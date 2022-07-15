export class SignInResponseDto {
    private name: string;
    private email: string;
    private token: string;


    constructor(name: string, email: string, token: string) {
        this.name = name;
        this.email = email;
        this.token = token;
    }
}