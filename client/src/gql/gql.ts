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
    "\n  mutation CreatePost($caption: String, $postImage: String) {\n    createPost(caption: $caption, postImage: $postImage) {\n      postCaption\n      postId\n      postImage\n      userId\n      user {\n        username\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  query Query {\n    getPosts {\n      postId\n      postImage\n      postCaption\n      user {\n        userId\n        username\n        profilePicture\n      }\n      isLiked\n      likeCount\n      likes {\n        username\n        userId\n        profilePicture\n      }\n    }\n  }\n": types.QueryDocument,
    "\n  mutation DataFill($username: String!, $dateOfBirth: String!) {\n    dataFill(username: $username, dateOfBirth: $dateOfBirth) {\n      dateOfBirth\n      email\n      isDataFilled\n      password\n      profilePicture\n      userId\n      username\n    }\n  }\n": types.DataFillDocument,
    "\n  mutation Mutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        username\n        userId\n        profilePicture\n        password\n        isDataFilled\n        email\n        dateOfBirth\n      }\n    }\n  }\n": types.MutationDocument,
    "\n  mutation Signup($email: String!, $password: String!) {\n    signup(email: $email, password: $password) {\n      user {\n        email\n        isDataFilled\n        password\n        profilePicture\n        userId\n        username\n      }\n    }\n  }\n": types.SignupDocument,
    "\n  mutation DeletePost($postId: String!) {\n    deletePost(postId: $postId)\n  }\n": types.DeletePostDocument,
    "\n  mutation OnLike($postId: String!) {\n    onLike(postId: $postId)\n  }\n": types.OnLikeDocument,
    "\n  mutation OnDislike($postId: String!) {\n    onDislike(postId: $postId)\n  }\n": types.OnDislikeDocument,
    "\n  query GetSinglePost($postId: String!) {\n    getSinglePost(postId: $postId) {\n      likeCount\n      postCaption\n      postId\n      postImage\n      user {\n        username\n        email\n      }\n      isLiked\n    }\n  }\n": types.GetSinglePostDocument,
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
export function graphql(source: "\n  mutation CreatePost($caption: String, $postImage: String) {\n    createPost(caption: $caption, postImage: $postImage) {\n      postCaption\n      postId\n      postImage\n      userId\n      user {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost($caption: String, $postImage: String) {\n    createPost(caption: $caption, postImage: $postImage) {\n      postCaption\n      postId\n      postImage\n      userId\n      user {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Query {\n    getPosts {\n      postId\n      postImage\n      postCaption\n      user {\n        userId\n        username\n        profilePicture\n      }\n      isLiked\n      likeCount\n      likes {\n        username\n        userId\n        profilePicture\n      }\n    }\n  }\n"): (typeof documents)["\n  query Query {\n    getPosts {\n      postId\n      postImage\n      postCaption\n      user {\n        userId\n        username\n        profilePicture\n      }\n      isLiked\n      likeCount\n      likes {\n        username\n        userId\n        profilePicture\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DataFill($username: String!, $dateOfBirth: String!) {\n    dataFill(username: $username, dateOfBirth: $dateOfBirth) {\n      dateOfBirth\n      email\n      isDataFilled\n      password\n      profilePicture\n      userId\n      username\n    }\n  }\n"): (typeof documents)["\n  mutation DataFill($username: String!, $dateOfBirth: String!) {\n    dataFill(username: $username, dateOfBirth: $dateOfBirth) {\n      dateOfBirth\n      email\n      isDataFilled\n      password\n      profilePicture\n      userId\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Mutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        username\n        userId\n        profilePicture\n        password\n        isDataFilled\n        email\n        dateOfBirth\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        username\n        userId\n        profilePicture\n        password\n        isDataFilled\n        email\n        dateOfBirth\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Signup($email: String!, $password: String!) {\n    signup(email: $email, password: $password) {\n      user {\n        email\n        isDataFilled\n        password\n        profilePicture\n        userId\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Signup($email: String!, $password: String!) {\n    signup(email: $email, password: $password) {\n      user {\n        email\n        isDataFilled\n        password\n        profilePicture\n        userId\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($postId: String!) {\n    deletePost(postId: $postId)\n  }\n"): (typeof documents)["\n  mutation DeletePost($postId: String!) {\n    deletePost(postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation OnLike($postId: String!) {\n    onLike(postId: $postId)\n  }\n"): (typeof documents)["\n  mutation OnLike($postId: String!) {\n    onLike(postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation OnDislike($postId: String!) {\n    onDislike(postId: $postId)\n  }\n"): (typeof documents)["\n  mutation OnDislike($postId: String!) {\n    onDislike(postId: $postId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetSinglePost($postId: String!) {\n    getSinglePost(postId: $postId) {\n      likeCount\n      postCaption\n      postId\n      postImage\n      user {\n        username\n        email\n      }\n      isLiked\n    }\n  }\n"): (typeof documents)["\n  query GetSinglePost($postId: String!) {\n    getSinglePost(postId: $postId) {\n      likeCount\n      postCaption\n      postId\n      postImage\n      user {\n        username\n        email\n      }\n      isLiked\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;