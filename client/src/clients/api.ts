import { auth } from '@/utils/firebase/config';
import { GraphQLClient } from 'graphql-request';

const isClient = typeof window !== 'undefined';

const getToken = async () => {
    if (isClient) {
        const token = localStorage.getItem("_hyped_token");
        return token ? `Bearer ${token}` : "";
    }
    return "";
};

export const createGraphQLClient = async () => {
  const token = await getToken();
  return new GraphQLClient('http://localhost:4000/graphql', {
    headers: {
      Authorization: token
    }
  });
};

export let graphqlClient: GraphQLClient;

export const initializeGraphQLClient = async () => {
  graphqlClient = await createGraphQLClient();
};