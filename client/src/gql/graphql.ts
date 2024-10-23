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

export type AuthResponse = {
  __typename?: 'AuthResponse';
  message?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type Brand = {
  __typename?: 'Brand';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  competitions?: Maybe<Array<Maybe<Competition>>>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationName?: Maybe<Scalars['String']['output']>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type CheckUserCompetitionResponse = {
  __typename?: 'CheckUserCompetitionResponse';
  completed?: Maybe<Scalars['String']['output']>;
  joined?: Maybe<Scalars['Boolean']['output']>;
  pointsEarned?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Competition = {
  __typename?: 'Competition';
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  terms?: Maybe<Scalars['String']['output']>;
};

export type CreateBrandInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  website: Scalars['String']['input'];
};

export type CreateCompetitionInput = {
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  prizes?: InputMaybe<Array<InputMaybe<CreateCompetitionPrizeInput>>>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  terms?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCompetitionPrizeInput = {
  description: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  rank: Scalars['Int']['input'];
  title: Scalars['String']['input'];
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

export type FollowResponse = {
  __typename?: 'FollowResponse';
  response?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
};

export type JoinCompetitionInput = {
  competitionId: Scalars['String']['input'];
};

export type LikeResponse = {
  __typename?: 'LikeResponse';
  isLiked: Scalars['Boolean']['output'];
  success: Scalars['Boolean']['output'];
};

export type LoginBrandInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUserInput = {
  firebaseUid: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  checkFollow: FollowResponse;
  createBrand?: Maybe<Scalars['String']['output']>;
  createCompetition?: Maybe<Competition>;
  createTask?: Maybe<Task>;
  createTaskCategory?: Maybe<TaskCategory>;
  createUser?: Maybe<Scalars['String']['output']>;
  joinCompetition?: Maybe<Response>;
  loginBrand?: Maybe<Scalars['String']['output']>;
  loginUser?: Maybe<Scalars['String']['output']>;
  oAuth2WithTwitter: AuthResponse;
  oAuth2WithTwitterCallback: AuthResponse;
  sendTweet: TweetResponse;
  updateBrand?: Maybe<Brand>;
  updateTaskCategory?: Maybe<TaskCategory>;
  updateUser?: Maybe<User>;
};


export type MutationCheckFollowArgs = {
  targetUserName: Scalars['String']['input'];
};


export type MutationCreateBrandArgs = {
  payload?: InputMaybe<CreateBrandInput>;
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


export type MutationJoinCompetitionArgs = {
  payload?: InputMaybe<JoinCompetitionInput>;
};


export type MutationLoginBrandArgs = {
  payload?: InputMaybe<LoginBrandInput>;
};


export type MutationLoginUserArgs = {
  payload?: InputMaybe<LoginUserInput>;
};


export type MutationOAuth2WithTwitterCallbackArgs = {
  code: Scalars['String']['input'];
  state: Scalars['String']['input'];
};


export type MutationSendTweetArgs = {
  tweetBody: Scalars['String']['input'];
};


export type MutationUpdateBrandArgs = {
  payload?: InputMaybe<UpdateBrandInput>;
};


export type MutationUpdateTaskCategoryArgs = {
  payload?: InputMaybe<UpdateTaskCategory>;
};


export type MutationUpdateUserArgs = {
  payload?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  checkTweetLike: LikeResponse;
  checkTweetRetweet: RetweetResponse;
  checkUserCompetition?: Maybe<CheckUserCompetitionResponse>;
  getAllBrands?: Maybe<Array<Maybe<Brand>>>;
  getBrandById?: Maybe<Brand>;
  getCompetitionById?: Maybe<Competition>;
  getCompetitions?: Maybe<Array<Maybe<Competition>>>;
  getCurrentBrand?: Maybe<Brand>;
  getCurrentUser?: Maybe<User>;
  getPresignedUrl: Scalars['String']['output'];
  getTask?: Maybe<Task>;
  getTaskCategories?: Maybe<Array<Maybe<TaskCategory>>>;
  getTaskCategory?: Maybe<TaskCategory>;
  getUser?: Maybe<User>;
  getUserById?: Maybe<User>;
};


export type QueryCheckTweetLikeArgs = {
  tweetId: Scalars['String']['input'];
};


export type QueryCheckTweetRetweetArgs = {
  tweetId: Scalars['String']['input'];
};


export type QueryCheckUserCompetitionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetBrandByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCompetitionByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPresignedUrlArgs = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
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

export type Response = {
  __typename?: 'Response';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RetweetResponse = {
  __typename?: 'RetweetResponse';
  isRetweeted: Scalars['Boolean']['output'];
  success: Scalars['Boolean']['output'];
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  socialAccessToken?: Maybe<Scalars['String']['output']>;
  socialApp?: Maybe<Scalars['String']['output']>;
  socialId?: Maybe<Scalars['String']['output']>;
  socialProfilePicture?: Maybe<Scalars['String']['output']>;
  socialRefreshToken?: Maybe<Scalars['String']['output']>;
  socialUsername?: Maybe<Scalars['String']['output']>;
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

export type TweetResponse = {
  __typename?: 'TweetResponse';
  success: Scalars['Boolean']['output'];
  tweet?: Maybe<Scalars['String']['output']>;
};

export type TwitterInfo = {
  __typename?: 'TwitterInfo';
  accessToken?: Maybe<Scalars['String']['output']>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  twitterId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UpdateBrandInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationName?: InputMaybe<Scalars['String']['input']>;
  profileImageUrl?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
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
  password?: InputMaybe<Scalars['String']['input']>;
  profileImageUrl?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  bio?: Maybe<Scalars['String']['output']>;
  coverPicture?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firebaseUid?: Maybe<Scalars['String']['output']>;
  globalRank?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  platformPoints?: Maybe<Scalars['Int']['output']>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  socialMedia?: Maybe<Array<Maybe<SocialMedia>>>;
  twitterInfo?: Maybe<TwitterInfo>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CreateBrandMutationVariables = Exact<{
  payload?: InputMaybe<CreateBrandInput>;
}>;


export type CreateBrandMutation = { __typename?: 'Mutation', createBrand?: string | null };

export type LoginBrandMutationVariables = Exact<{
  payload?: InputMaybe<LoginBrandInput>;
}>;


export type LoginBrandMutation = { __typename?: 'Mutation', loginBrand?: string | null };

export type UpdateBrandMutationVariables = Exact<{
  payload?: InputMaybe<UpdateBrandInput>;
}>;


export type UpdateBrandMutation = { __typename?: 'Mutation', updateBrand?: { __typename?: 'Brand', name?: string | null, organizationName?: string | null, email?: string | null, bio?: string | null, website?: string | null, profileImageUrl?: string | null } | null };

export type CreateCompetitionMutationVariables = Exact<{
  payload?: InputMaybe<CreateCompetitionInput>;
}>;


export type CreateCompetitionMutation = { __typename?: 'Mutation', createCompetition?: { __typename?: 'Competition', id?: string | null, name?: string | null, terms?: string | null, startDate?: string | null, imageUrl?: string | null, endDate?: string | null, description?: string | null } | null };

export type JoinCompetitionMutationVariables = Exact<{
  payload?: InputMaybe<JoinCompetitionInput>;
}>;


export type JoinCompetitionMutation = { __typename?: 'Mutation', joinCompetition?: { __typename?: 'Response', success?: boolean | null, message?: string | null } | null };

export type OAuth2WithTwitterMutationVariables = Exact<{ [key: string]: never; }>;


export type OAuth2WithTwitterMutation = { __typename?: 'Mutation', oAuth2WithTwitter: { __typename?: 'AuthResponse', success: boolean, message?: string | null, url?: string | null } };

export type OAuth2WithTwitterCallbackMutationVariables = Exact<{
  state: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type OAuth2WithTwitterCallbackMutation = { __typename?: 'Mutation', oAuth2WithTwitterCallback: { __typename?: 'AuthResponse', success: boolean, message?: string | null, url?: string | null } };

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

export type GetCurrentBrandQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentBrandQuery = { __typename?: 'Query', getCurrentBrand?: { __typename?: 'Brand', _id: string, name?: string | null, bio?: string | null, email?: string | null, website?: string | null, profileImageUrl?: string | null, organizationName?: string | null, competitions?: Array<{ __typename?: 'Competition', id?: string | null, terms?: string | null, name?: string | null, imageUrl?: string | null, startDate?: string | null, endDate?: string | null, description?: string | null } | null> | null } | null };

export type GetCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCompetitionsQuery = { __typename?: 'Query', getCompetitions?: Array<{ __typename?: 'Competition', id?: string | null, name?: string | null, description?: string | null, imageUrl?: string | null, terms?: string | null, startDate?: string | null, endDate?: string | null } | null> | null };

export type GetCompetitionByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetCompetitionByIdQuery = { __typename?: 'Query', getCompetitionById?: { __typename?: 'Competition', id?: string | null, name?: string | null, description?: string | null, imageUrl?: string | null, terms?: string | null, startDate?: string | null, endDate?: string | null } | null };

export type CheckUserCompetitionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CheckUserCompetitionQuery = { __typename?: 'Query', checkUserCompetition?: { __typename?: 'CheckUserCompetitionResponse', success?: boolean | null, joined?: boolean | null, completed?: string | null, pointsEarned?: number | null, rank?: number | null } | null };

export type GetTaskCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaskCategoriesQuery = { __typename?: 'Query', getTaskCategories?: Array<{ __typename?: 'TaskCategory', _id?: string | null, name?: string | null, description?: string | null, image?: string | null } | null> | null };

export type GetUserQueryVariables = Exact<{
  identifier: Scalars['String']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', name?: string | null } | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', _id: string, name?: string | null, firebaseUid?: string | null, username?: string | null, email?: string | null, profileImageUrl?: string | null, bio?: string | null, globalRank?: number | null, platformPoints?: number | null, isEmailVerified?: boolean | null, coverPicture?: string | null, phoneNumber?: string | null, id: string, socialMedia?: Array<{ __typename?: 'SocialMedia', socialApp?: string | null, socialId?: string | null, socialUsername?: string | null, socialProfilePicture?: string | null, socialAccessToken?: string | null, socialRefreshToken?: string | null } | null> | null } | null };

export type GetPresignedUrlQueryVariables = Exact<{
  fileName: Scalars['String']['input'];
  contentType: Scalars['String']['input'];
}>;


export type GetPresignedUrlQuery = { __typename?: 'Query', getPresignedUrl: string };


export const CreateBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBrandInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<CreateBrandMutation, CreateBrandMutationVariables>;
export const LoginBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginBrandInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<LoginBrandMutation, LoginBrandMutationVariables>;
export const UpdateBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateBrand"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateBrandInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateBrand"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}}]}}]}}]} as unknown as DocumentNode<UpdateBrandMutation, UpdateBrandMutationVariables>;
export const CreateCompetitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCompetition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCompetitionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompetition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"terms"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<CreateCompetitionMutation, CreateCompetitionMutationVariables>;
export const JoinCompetitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"joinCompetition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JoinCompetitionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinCompetition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<JoinCompetitionMutation, JoinCompetitionMutationVariables>;
export const OAuth2WithTwitterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OAuth2WithTwitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oAuth2WithTwitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<OAuth2WithTwitterMutation, OAuth2WithTwitterMutationVariables>;
export const OAuth2WithTwitterCallbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OAuth2WithTwitterCallback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"state"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oAuth2WithTwitterCallback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"state"},"value":{"kind":"Variable","name":{"kind":"Name","value":"state"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<OAuth2WithTwitterCallbackMutation, OAuth2WithTwitterCallbackMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}]}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetCurrentBrandDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"organizationName"}},{"kind":"Field","name":{"kind":"Name","value":"competitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"terms"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentBrandQuery, GetCurrentBrandQueryVariables>;
export const GetCompetitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCompetitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompetitions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"terms"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<GetCompetitionsQuery, GetCompetitionsQueryVariables>;
export const GetCompetitionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCompetitionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCompetitionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"terms"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<GetCompetitionByIdQuery, GetCompetitionByIdQueryVariables>;
export const CheckUserCompetitionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkUserCompetition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkUserCompetition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"joined"}},{"kind":"Field","name":{"kind":"Name","value":"completed"}},{"kind":"Field","name":{"kind":"Name","value":"pointsEarned"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}}]}}]}}]} as unknown as DocumentNode<CheckUserCompetitionQuery, CheckUserCompetitionQueryVariables>;
export const GetTaskCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaskCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTaskCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<GetTaskCategoriesQuery, GetTaskCategoriesQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"identifier"},"value":{"kind":"Variable","name":{"kind":"Name","value":"identifier"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"firebaseUid"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"profileImageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"globalRank"}},{"kind":"Field","name":{"kind":"Name","value":"platformPoints"}},{"kind":"Field","name":{"kind":"Name","value":"isEmailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"coverPicture"}},{"kind":"Field","name":{"kind":"Name","value":"socialMedia"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"socialApp"}},{"kind":"Field","name":{"kind":"Name","value":"socialId"}},{"kind":"Field","name":{"kind":"Name","value":"socialUsername"}},{"kind":"Field","name":{"kind":"Name","value":"socialProfilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"socialAccessToken"}},{"kind":"Field","name":{"kind":"Name","value":"socialRefreshToken"}}]}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetPresignedUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPresignedUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPresignedUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}},{"kind":"Argument","name":{"kind":"Name","value":"contentType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"contentType"}}}]}]}}]} as unknown as DocumentNode<GetPresignedUrlQuery, GetPresignedUrlQueryVariables>;