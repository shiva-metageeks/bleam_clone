/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "#graphql\n    mutation createBrand($payload: CreateBrandInput) {\n        createBrand(payload: $payload)\n    }  ": types.CreateBrandDocument,
    "#graphql\n    mutation loginBrand($payload: LoginBrandInput) {\n        loginBrand(payload: $payload)\n    }  ": types.LoginBrandDocument,
    "#graphql\n    mutation updateBrand($payload: UpdateBrandInput) {\n        updateBrand(payload: $payload) {\n            name\n            organizationName\n            email\n            bio\n            website\n            profileImageUrl\n        }\n    }  ": types.UpdateBrandDocument,
    "\n  mutation createCompetition($payload: CreateCompetitionInput) {\n    createCompetition(payload: $payload) {\n      id\n      name\n      terms\n      startDate\n      imageUrl\n      id\n      endDate\n      description\n    }\n  }\n": types.CreateCompetitionDocument,
    "\n  mutation joinCompetition($payload: JoinCompetitionInput) {\n    joinCompetition(payload: $payload) {\n      success\n      message\n    }\n  }\n": types.JoinCompetitionDocument,
    "\nmutation OAuth2WithTwitter {\n  oAuth2WithTwitter{\n    success\n    message\n    url\n  }\n}\n": types.OAuth2WithTwitterDocument,
    "\nmutation OAuth2WithTwitterCallback($state: String!, $code: String!) {\n  oAuth2WithTwitterCallback(state: $state, code: $code) {\n    success\n    message\n    url\n  }\n}\n": types.OAuth2WithTwitterCallbackDocument,
    "#graphql\n    mutation createUser($payload: CreateUserInput) {\n        createUser(payload: $payload)\n    }  ": types.CreateUserDocument,
    "#graphql\n    mutation loginUser($payload: LoginUserInput) {\n        loginUser(payload: $payload)\n    }  ": types.LoginUserDocument,
    "#graphql\n    mutation updateUser($payload: UpdateUserInput) {\n        updateUser(payload: $payload){\n            name,\n            bio\n        }\n    }  ": types.UpdateUserDocument,
    "\nquery getCurrentBrand {\n    getCurrentBrand {\n       _id\n            name\n            bio\n            email\n            website\n            profileImageUrl  \n            organizationName\n            competitions {\n                id\n                terms\n                name\n                imageUrl\n                startDate\n                endDate\n                description\n            }\n    }\n}\n": types.GetCurrentBrandDocument,
    "\n    query getCompetitions {\n      getCompetitions {\n         id\n        name\n        description\n        imageUrl\n        terms\n        startDate\n        endDate\n      }\n    }\n": types.GetCompetitionsDocument,
    "\nquery getCompetitionById($id: ID!) {\n  getCompetitionById(id: $id) {\n        id\n        name\n        description\n        imageUrl\n        terms\n        startDate\n        endDate\n  }\n}\n": types.GetCompetitionByIdDocument,
    "\nquery checkUserCompetition($id: ID!) {\n  checkUserCompetition(id: $id) {\n    success\n    joined\n    completed\n    pointsEarned\n    rank\n  }\n}\n": types.CheckUserCompetitionDocument,
    "\nquery getTaskCategories {\n    getTaskCategories {\n         _id\n        name\n        description\n        image\n    }\n}\n": types.GetTaskCategoriesDocument,
    "#graphql\n    query getUser($identifier: String!) {\n        getUser(identifier: $identifier) {\n            name\n        }\n    }\n    ": types.GetUserDocument,
    "query getCurrentUser {\n        getCurrentUser {\n            _id\n            name\n            firebaseUid\n            username\n            email\n            profileImageUrl\n            bio\n            globalRank\n            platformPoints\n            isEmailVerified\n            coverPicture\n            socialMedia {\n                socialApp\n                socialId\n                socialUsername\n                socialProfilePicture\n                socialAccessToken\n                socialRefreshToken\n            }\n            phoneNumber\n            id  \n        }\n    }\n    ": types.GetCurrentUserDocument,
    "\nquery getPresignedUrl($fileName: String!, $contentType: String!) {\n  getPresignedUrl(fileName: $fileName, contentType: $contentType)\n}\n": types.GetPresignedUrlDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation createBrand($payload: CreateBrandInput) {\n        createBrand(payload: $payload)\n    }  "): (typeof documents)["#graphql\n    mutation createBrand($payload: CreateBrandInput) {\n        createBrand(payload: $payload)\n    }  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation loginBrand($payload: LoginBrandInput) {\n        loginBrand(payload: $payload)\n    }  "): (typeof documents)["#graphql\n    mutation loginBrand($payload: LoginBrandInput) {\n        loginBrand(payload: $payload)\n    }  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation updateBrand($payload: UpdateBrandInput) {\n        updateBrand(payload: $payload) {\n            name\n            organizationName\n            email\n            bio\n            website\n            profileImageUrl\n        }\n    }  "): (typeof documents)["#graphql\n    mutation updateBrand($payload: UpdateBrandInput) {\n        updateBrand(payload: $payload) {\n            name\n            organizationName\n            email\n            bio\n            website\n            profileImageUrl\n        }\n    }  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createCompetition($payload: CreateCompetitionInput) {\n    createCompetition(payload: $payload) {\n      id\n      name\n      terms\n      startDate\n      imageUrl\n      id\n      endDate\n      description\n    }\n  }\n"): (typeof documents)["\n  mutation createCompetition($payload: CreateCompetitionInput) {\n    createCompetition(payload: $payload) {\n      id\n      name\n      terms\n      startDate\n      imageUrl\n      id\n      endDate\n      description\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation joinCompetition($payload: JoinCompetitionInput) {\n    joinCompetition(payload: $payload) {\n      success\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation joinCompetition($payload: JoinCompetitionInput) {\n    joinCompetition(payload: $payload) {\n      success\n      message\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation OAuth2WithTwitter {\n  oAuth2WithTwitter{\n    success\n    message\n    url\n  }\n}\n"): (typeof documents)["\nmutation OAuth2WithTwitter {\n  oAuth2WithTwitter{\n    success\n    message\n    url\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation OAuth2WithTwitterCallback($state: String!, $code: String!) {\n  oAuth2WithTwitterCallback(state: $state, code: $code) {\n    success\n    message\n    url\n  }\n}\n"): (typeof documents)["\nmutation OAuth2WithTwitterCallback($state: String!, $code: String!) {\n  oAuth2WithTwitterCallback(state: $state, code: $code) {\n    success\n    message\n    url\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation createUser($payload: CreateUserInput) {\n        createUser(payload: $payload)\n    }  "): (typeof documents)["#graphql\n    mutation createUser($payload: CreateUserInput) {\n        createUser(payload: $payload)\n    }  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation loginUser($payload: LoginUserInput) {\n        loginUser(payload: $payload)\n    }  "): (typeof documents)["#graphql\n    mutation loginUser($payload: LoginUserInput) {\n        loginUser(payload: $payload)\n    }  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation updateUser($payload: UpdateUserInput) {\n        updateUser(payload: $payload){\n            name,\n            bio\n        }\n    }  "): (typeof documents)["#graphql\n    mutation updateUser($payload: UpdateUserInput) {\n        updateUser(payload: $payload){\n            name,\n            bio\n        }\n    }  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getCurrentBrand {\n    getCurrentBrand {\n       _id\n            name\n            bio\n            email\n            website\n            profileImageUrl  \n            organizationName\n            competitions {\n                id\n                terms\n                name\n                imageUrl\n                startDate\n                endDate\n                description\n            }\n    }\n}\n"): (typeof documents)["\nquery getCurrentBrand {\n    getCurrentBrand {\n       _id\n            name\n            bio\n            email\n            website\n            profileImageUrl  \n            organizationName\n            competitions {\n                id\n                terms\n                name\n                imageUrl\n                startDate\n                endDate\n                description\n            }\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getCompetitions {\n      getCompetitions {\n         id\n        name\n        description\n        imageUrl\n        terms\n        startDate\n        endDate\n      }\n    }\n"): (typeof documents)["\n    query getCompetitions {\n      getCompetitions {\n         id\n        name\n        description\n        imageUrl\n        terms\n        startDate\n        endDate\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getCompetitionById($id: ID!) {\n  getCompetitionById(id: $id) {\n        id\n        name\n        description\n        imageUrl\n        terms\n        startDate\n        endDate\n  }\n}\n"): (typeof documents)["\nquery getCompetitionById($id: ID!) {\n  getCompetitionById(id: $id) {\n        id\n        name\n        description\n        imageUrl\n        terms\n        startDate\n        endDate\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery checkUserCompetition($id: ID!) {\n  checkUserCompetition(id: $id) {\n    success\n    joined\n    completed\n    pointsEarned\n    rank\n  }\n}\n"): (typeof documents)["\nquery checkUserCompetition($id: ID!) {\n  checkUserCompetition(id: $id) {\n    success\n    joined\n    completed\n    pointsEarned\n    rank\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getTaskCategories {\n    getTaskCategories {\n         _id\n        name\n        description\n        image\n    }\n}\n"): (typeof documents)["\nquery getTaskCategories {\n    getTaskCategories {\n         _id\n        name\n        description\n        image\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query getUser($identifier: String!) {\n        getUser(identifier: $identifier) {\n            name\n        }\n    }\n    "): (typeof documents)["#graphql\n    query getUser($identifier: String!) {\n        getUser(identifier: $identifier) {\n            name\n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query getCurrentUser {\n        getCurrentUser {\n            _id\n            name\n            firebaseUid\n            username\n            email\n            profileImageUrl\n            bio\n            globalRank\n            platformPoints\n            isEmailVerified\n            coverPicture\n            socialMedia {\n                socialApp\n                socialId\n                socialUsername\n                socialProfilePicture\n                socialAccessToken\n                socialRefreshToken\n            }\n            phoneNumber\n            id  \n        }\n    }\n    "): (typeof documents)["query getCurrentUser {\n        getCurrentUser {\n            _id\n            name\n            firebaseUid\n            username\n            email\n            profileImageUrl\n            bio\n            globalRank\n            platformPoints\n            isEmailVerified\n            coverPicture\n            socialMedia {\n                socialApp\n                socialId\n                socialUsername\n                socialProfilePicture\n                socialAccessToken\n                socialRefreshToken\n            }\n            phoneNumber\n            id  \n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery getPresignedUrl($fileName: String!, $contentType: String!) {\n  getPresignedUrl(fileName: $fileName, contentType: $contentType)\n}\n"): (typeof documents)["\nquery getPresignedUrl($fileName: String!, $contentType: String!) {\n  getPresignedUrl(fileName: $fileName, contentType: $contentType)\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;