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
    "#graphql\n    mutation createUser($payload: CreateUserInput) {\n        createUser(payload: $payload)\n    }  ": types.CreateUserDocument,
    "#graphql\n    mutation loginUser($payload: LoginUserInput) {\n        loginUser(payload: $payload)\n    }  ": types.LoginUserDocument,
    "#graphql\n    mutation updateUser($payload: UpdateUserInput) {\n        updateUser(payload: $payload){\n            name,\n            bio\n        }\n    }  ": types.UpdateUserDocument,
    "#graphql\n    query GetUser($identifier: String!) {\n        getUser(identifier: $identifier) {\n           \n            name\n            \n        }\n    }\n    ": types.GetUserDocument,
    "#graphql\n    query getCurrentUser {\n        getCurrentUser {\n            username\n            name\n            email\n            profileImageUrl\n            bio\n        }\n    }\n    ": types.GetCurrentUserDocument,
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
export function graphql(source: "#graphql\n    query GetUser($identifier: String!) {\n        getUser(identifier: $identifier) {\n           \n            name\n            \n        }\n    }\n    "): (typeof documents)["#graphql\n    query GetUser($identifier: String!) {\n        getUser(identifier: $identifier) {\n           \n            name\n            \n        }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query getCurrentUser {\n        getCurrentUser {\n            username\n            name\n            email\n            profileImageUrl\n            bio\n        }\n    }\n    "): (typeof documents)["#graphql\n    query getCurrentUser {\n        getCurrentUser {\n            username\n            name\n            email\n            profileImageUrl\n            bio\n        }\n    }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;