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

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  commentId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['String']['output'];
  postId: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type InvalidCredentials = {
  __typename?: 'InvalidCredentials';
  error: Scalars['String']['output'];
};

export type Like = {
  __typename?: 'Like';
  likeId: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

/** auth details or errors */
export type LoginResponse = AuthPayload | InvalidCredentials;

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  dataFill?: Maybe<User>;
  deletePost?: Maybe<Scalars['String']['output']>;
  login?: Maybe<AuthPayload>;
  onDislike?: Maybe<Scalars['String']['output']>;
  onLike?: Maybe<Scalars['String']['output']>;
  signup?: Maybe<AuthPayload>;
};


export type MutationAddCommentArgs = {
  comment: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};


export type MutationCreatePostArgs = {
  caption?: InputMaybe<Scalars['String']['input']>;
  postImage?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDataFillArgs = {
  dateOfBirth: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationOnDislikeArgs = {
  postId: Scalars['String']['input'];
};


export type MutationOnLikeArgs = {
  postId: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type NotUniqueEmailError = {
  __typename?: 'NotUniqueEmailError';
  error: Scalars['String']['output'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String']['output'];
  isLiked: Scalars['Boolean']['output'];
  likeCount: Scalars['Int']['output'];
  postCaption?: Maybe<Scalars['String']['output']>;
  postId: Scalars['ID']['output'];
  postImage?: Maybe<Scalars['String']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getComments: Array<Maybe<Comment>>;
  getPostLikes: Array<Maybe<Like>>;
  getPosts?: Maybe<Array<Maybe<Post>>>;
  getPostsByUserId?: Maybe<Array<Maybe<Post>>>;
  getSinglePost?: Maybe<Post>;
  getUserById?: Maybe<User>;
};


export type QueryGetCommentsArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetPostLikesArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetPostsByUserIdArgs = {
  userId: Scalars['String']['input'];
};


export type QueryGetSinglePostArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['String']['input'];
};

/** auth details or errors */
export type SignupResponse = AuthPayload | NotUniqueEmailError;

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  dateOfBirth: Scalars['String']['output'];
  email: Scalars['String']['output'];
  isDataFilled: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type CreatePostMutationVariables = Exact<{
  caption?: InputMaybe<Scalars['String']['input']>;
  postImage?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', postCaption?: string | null, postId: string, postImage?: string | null, userId: string, user: { __typename?: 'User', username: string } } | null };

export type DataFillMutationVariables = Exact<{
  username: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
}>;


export type DataFillMutation = { __typename?: 'Mutation', dataFill?: { __typename?: 'User', dateOfBirth: string, email: string, isDataFilled: boolean, password: string, profilePicture?: string | null, userId: string, username: string } | null };

export type MutationMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type MutationMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', username: string, userId: string, profilePicture?: string | null, password: string, isDataFilled: boolean, email: string, dateOfBirth: string } } | null };

export type SignupMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'AuthPayload', user: { __typename?: 'User', email: string, isDataFilled: boolean, password: string, profilePicture?: string | null, userId: string, username: string } } | null };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"caption"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postImage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"caption"},"value":{"kind":"Variable","name":{"kind":"Name","value":"caption"}}},{"kind":"Argument","name":{"kind":"Name","value":"postImage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postImage"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postCaption"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"postImage"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const DataFillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DataFill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateOfBirth"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataFill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateOfBirth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateOfBirth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isDataFilled"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]} as unknown as DocumentNode<DataFillMutation, DataFillMutationVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"isDataFilled"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}}]}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isDataFilled"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;