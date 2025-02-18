interface UploadedFileType {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
}
export declare class PdfController {
    uploadFile(file: UploadedFileType): {
        message: string;
        filePath: string;
    };
}
export {};
