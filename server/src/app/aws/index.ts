import AwsService from "@src/services/aws";
import { Context } from "@src/types/types";
import envConfig from "@src/utils/imports/env";

export const awsQueries = `#graphql
    getPresignedUrl(fileName: String!, contentType: String!): String!
`

const queries = {
    getPresignedUrl: async (parent: any, { fileName, contentType }: { fileName: string, contentType: string }, context: Context) => {
        
        const bucketName = envConfig.AWS_BUCKET;
        console.log(bucketName);
        if (!bucketName) {
            throw new Error("AWS_BUCKET is not set");
        }
        const url = await AwsService.getPresignedUrl({ key: fileName, contentType, bucketName, expiresIn: 60 * 60 * 24 });
        return  url ;
    },
}

export const resolvers = {
    queries,
}

export const Aws = { resolvers, awsQueries }