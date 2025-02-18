import { SignService } from './sign.service';
export declare class SignController {
    private readonly signService;
    constructor(signService: SignService);
    addSign(body: {
        filePath: string;
        role: string;
        email: string;
    }): Promise<any>;
    submitSign(body: {
        filePath: string;
    }): Promise<any>;
}
