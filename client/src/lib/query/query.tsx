import { gql } from "graphql-request";
export const POST_DELETE_QUERY = gql`
  mutation DeletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;

export const POST_LIKE_QUERY = gql`
  mutation OnLike($postId: String!) {
    onLike(postId: $postId)
  }
`;
export const POST_DISLIKE_QUERY = gql`
  mutation OnDislike($postId: String!) {
    onDislike(postId: $postId)
  }
`;
