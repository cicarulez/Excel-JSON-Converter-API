import {Request, Response, NextFunction} from 'express';
import Config from '../config/get-config';

function formDataMiddleware(req: Request, res: Response, next: NextFunction) {
    const contentType = req.headers['content-type'];

    if (!contentType || !contentType.startsWith('multipart/form-data')) {
        return next();
    }

    const contentLength = parseInt(req.headers['content-length'] as string, 10);
    const total = Config.totalFormSizeMb;
    if (contentLength > 1024 * 1024 * total) {
        return res.status(400).json({message: `the form is too big, the maximum limit size is ${total}mb`});
    }

    const allowedExtensions = ['xlsx', 'xls'];
    const singleFile = req.file as Express.Multer.File;

    if (!singleFile) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    const fileExtension = singleFile.originalname.split('.').pop()?.toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
        return res.status(400).json({ message: `No valid file uploaded. Accept only file types: ${allowedExtensions.join(', ')}` });
    }

    return next();
}

export default formDataMiddleware;
