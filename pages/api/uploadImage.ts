import multer from 'multer';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { Request } from 'express';


// Configure multer for storage
const storage = multer.diskStorage({
    destination: './public/uploads/', // Save images in `public/uploads`
    filename: (req: any, file: any, cb: any) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage });

// Next.js API route handler
const handler = createRouter<NextApiRequest, NextApiResponse>()
    .use((req, res, next) => {
        upload.single('image')(req as unknown as Request, res as any, next as any);
    })
    .post((req, res) => {
        const file = (req as unknown as Request & { file?: Express.Multer.File }).file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const filePath = `/uploads/${file.filename}`;
        res.status(200).json({ imageUrl: filePath });
    });

export default handler.handler();
// Disable Next.js bodyParser to work with multer
export const config = {
    api: {
        bodyParser: false
    }
};
