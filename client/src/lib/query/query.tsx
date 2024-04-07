import { gql } from "graphql-request";
export const POST_DELETE_QUERY = gql`
  mutation DeletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;
