export declare class SignService {
    private apiUrl;
    addSignTag(pdfPath: string, role: string, email: string): Promise<any>;
    submitForESign(pdfPath: string): Promise<any>;
}
