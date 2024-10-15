import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import s3Client from '@src/utils/aws/awsConfig';

class AwsService {
    public static async getPresignedUrl({bucketName, key, contentType, expiresIn}: {bucketName: string, key: string, contentType: string, expiresIn: number}) {
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            ContentType: contentType,
        });
        const signedUrl = await getSignedUrl(s3Client, command, {
            expiresIn: expiresIn,
        });
        return signedUrl;
    }
}

export default AwsService; 