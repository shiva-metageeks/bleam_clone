import { gql } from "graphql-request";
import { graphqlClient } from "@/clients/api"

const getPresignedUrlQuery = gql`
query getPresignedUrl($fileName: String!, $contentType: String!) {
  getPresignedUrl(fileName: $fileName, contentType: $contentType)
}
`
interface PresignedUrlResult {
   getPresignedUrl: string;
 }
 
 interface PresignedUrlVariables {
   fileName: string;
   contentType: string;
 }


export const getUploadUrl = async (fileName: string, contentType: string): Promise<string | null> => {
  
   try {
    const { getPresignedUrl } = await graphqlClient.request<PresignedUrlResult, PresignedUrlVariables>(getPresignedUrlQuery, { fileName, contentType })
    return getPresignedUrl;
   } catch (error) {
    console.error("Error fetching presigned URL:", error);
    return null;
   }
}