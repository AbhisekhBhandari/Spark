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

export const GET_POST_QUERY = gql`
  query GetSinglePost($postId: String!) {
    getSinglePost(postId: $postId) {
      likeCount
      postCaption
      postId
      postImage
      user {
        username
        email
      }
      isLiked
    }
  }
`;

export const GET_POST_LIKES_QUERY = gql`
  query Query($postId: String!) {
    getPostLikes(postId: $postId) {
      likeId
      profilePicture
      userId
      username
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query GetComments($postId: String!) {
    getComments(postId: $postId) {
      comment
      commentId
      createdAt
      profilePicture
      userId
      username
      postId
    }
  }
`;
export const POST_COMMENT_QUERY = gql`
  mutation Mutation($postId: String!, $comment: String!) {
    addComment(postId: $postId, comment: $comment) {
      comment
      commentId
      postId
      profilePicture
      userId
      username
    }
  }
`;
