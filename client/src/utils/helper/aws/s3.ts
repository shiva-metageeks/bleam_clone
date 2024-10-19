import { getPresignedUrlQuery } from "@/graphql/query/aws";
import { graphqlClient } from "@/clients/api"

export const getUploadUrl = async (fileName: string, contentType: string): Promise<string | null> => {
   const { getPresignedUrl:uploadUrl } = await graphqlClient.request(getPresignedUrlQuery, { fileName, contentType })
   console.log("response",uploadUrl);
   return uploadUrl as string | null;
}