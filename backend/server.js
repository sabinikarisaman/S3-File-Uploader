const express = require('express');
const cors = require('cors');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// AWS Configuration
const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

if (!bucketName || !bucketRegion || !awsAccessKeyId || !awsSecretAccessKey) {
    console.error('Missing AWS configuration in environment variables.');
    process.exit(1);
}

const s3Client = new S3Client({
    region: bucketRegion,
    credentials: {
        accessKeyId: awsAccessKeyId,
        secretAccessKey: awsSecretAccessKey,
    },
});

app.post('/api/generate-upload-url', async (req, res) => {
    try {
        const { filename, contentType } = req.body;

        if (!filename || !contentType) {
            return res.status(400).json({ error: 'Filename and Content-Type are required.' });
        }

        const key = `uploads/${Date.now()}-${filename}`;
        const putObjectParams = {
            Bucket: bucketName,
            Key: key,
            ContentType: contentType,
        };

        const command = new PutObjectCommand(putObjectParams);
        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 });

        res.json({ uploadUrl: signedUrl, key: key });
    } catch (error) {
        console.error('Error generating pre-signed URL:', error);
        res.status(500).json({ error: 'Failed to generate pre-signed URL' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});