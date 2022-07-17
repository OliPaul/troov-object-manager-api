class HttpException extends Error {
    status: number;
    message: string;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }

    toJson(): Object {
        return {
            error: this.message
        }
    }
}

export default HttpException;