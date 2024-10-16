/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Competition = {
  __typename?: 'Competition';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type CreateCompetitionInput = {
  description: Scalars['String']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateTaskCategory = {
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateTaskInput = {
  description: Scalars['String']['input'];
  media?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  reward: Scalars['Int']['input'];
  taskId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firebaseUid: Scalars['String']['input'];
  isEmailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImageUrl?: InputMaybe<Scalars['String']['input']>;
};

export type LoginUserInput = {
  firebaseUid: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompetition?: Maybe<Competition>;
  createTask?: Maybe<Task>;
  createTaskCategory?: Maybe<TaskCategory>;
  createUser?: Maybe<Scalars['String']['output']>;
  loginUser?: Maybe<Scalars['String']['output']>;
  updateTaskCategory?: Maybe<TaskCategory>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCompetitionArgs = {
  payload?: InputMaybe<CreateCompetitionInput>;
};


export type MutationCreateTaskArgs = {
  payload?: InputMaybe<CreateTaskInput>;
};


export type MutationCreateTaskCategoryArgs = {
  payload?: InputMaybe<CreateTaskCategory>;
};


export type MutationCreateUserArgs = {
  payload?: InputMaybe<CreateUserInput>;
};


export type MutationLoginUserArgs = {
  payload?: InputMaybe<LoginUserInput>;
};


export type MutationUpdateTaskCategoryArgs = {
  payload?: InputMaybe<UpdateTaskCategory>;
};


export type MutationUpdateUserArgs = {
  payload?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getCompetition?: Maybe<Competition>;
  getCompetitions?: Maybe<Array<Maybe<Competition>>>;
  getCurrentUser?: Maybe<User>;
  getTask?: Maybe<Task>;
  getTaskCategories?: Maybe<Array<Maybe<TaskCategory>>>;
  getTaskCategory?: Maybe<TaskCategory>;
  getUser?: Maybe<User>;
  getUserById?: Maybe<User>;
};


export type QueryGetCompetitionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetTaskArgs = {
  taskId: Scalars['ID']['input'];
};


export type QueryGetTaskCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  identifier: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Task = {
  __typename?: 'Task';
  description: Scalars['String']['output'];
  media?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  reward: Scalars['Int']['output'];
  taskId: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type TaskCategory = {
  __typename?: 'TaskCategory';
  _id?: Maybe<Scalars['ID']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UpdateTaskCategory = {
  _id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImageUrl?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  globalRank?: Maybe<Scalars['Int']['output']>;
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CreateUserMutationVariables = Exact<{
  payload?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: string | null };

export type LoginUserMutationVariables = Exact<{
  payload?: InputMaybe<LoginUserInput>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: string | null };

export type UpdateUserMutationVariables = Exact<{
  payload?: InputMaybe<UpdateUserInput>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', name?: string | null, bio?: string | null } | null };

export type GetUserQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', name?: string | null } | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', username?: string | null, name?: string | null, email?: string | null, profileImageUrl?: string | null, bio?: string | null } | null };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"identifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;