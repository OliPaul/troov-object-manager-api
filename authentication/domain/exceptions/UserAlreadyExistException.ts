import HttpException from "../../../exceptions/HttpException";

export class UserAlreadyExistException extends HttpException {
    status: number;
    message: string;
    constructor(status: number, message: string) {
        super(status, message);
        this.status = status;
        this.message = message;
    }
}