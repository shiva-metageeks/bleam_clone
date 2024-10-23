// awsConfig.ts
import {S3Client} from '@aws-sdk/client-s3';
import envConfig from '@src/utils/imports/env';

const s3Client = new S3Client({
  region: envConfig.AWS_REGION,
  credentials: {
    accessKeyId: envConfig.AWS_ACCESS_KEY,
    secretAccessKey: envConfig.AWS_SECRET_KEY,
  },
});

export default s3Client;