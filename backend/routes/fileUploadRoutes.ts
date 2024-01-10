import { Request, Response, Router } from 'express';
import cvUpload from '../middleware/cvUpload';
import { MulterError } from 'multer';
import { S3Client } from '@aws-sdk/client-s3';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 } from 'uuid';

const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY as string,
        secretAccessKey: process.env.AWS_SECRET_KEY as string
    },
    region: process.env.AWS_BUCKET_REGION as string
});

const fileUploadRoutes: Router = Router();

fileUploadRoutes.post('/cv-upload', (req: Request, res: Response) => {
    cvUpload(req, res, async err => {
        if (err) {
            if (err instanceof MulterError) {
                if (err.code === 'LIMIT_UNEXPECTED_FILE') {
                    return res.status(422).json({ message: 'Plik musi mieć rozszerzenie .pdf' });
                }
                if (err.code === 'LIMIT_FILE_SIZE') {
                    return res.status(422).json({ message: 'Plik może mieć maksymalnie 3MB' });
                }
            }
            else {
                return res.sendStatus(500);
            }
        }
        const file = req.file;
        if (!file) return res.status(422).json({ message: 'Plik jest wymagany' });
        const fileName = v4();
        const key = `cvs/${fileName}`;
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
            Body: file.buffer,
            ContentType: file.mimetype
        };
        const command = new PutObjectCommand(params);
        try {
            await s3.send(command);
            res.json({ fileName });
        } catch (err) {
            return res.sendStatus(500);
        }
    });
});

export default fileUploadRoutes;