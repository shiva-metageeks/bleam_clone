import { graphql } from "@/gql"

export const getPresignedUrlQuery = graphql(
`#graphql
 query getPresignedUrl($fileName: String!, $contentType: String!) {
  getPresignedUrl(fileName: $fileName, contentType: $contentType)
}
`
)