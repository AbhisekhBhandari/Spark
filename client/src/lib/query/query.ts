import { gql } from "graphql-request";
export const GET_POSTS_QUERY = gql`
  query GetPostsQuery {
    getPosts {
      postId
      postImage
      postCaption
      createdAt
      user {
        userId
        username
        profilePicture
      }
      isLiked
      likeCount
    }
  }
`;

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


export const GET_POST_QUERY = gql`
  query GetSinglePost($postId: String!) {
    getSinglePost(postId: $postId) {
      likeCount
      postCaption
      postId
      postImage
      createdAt
      user {
        username
        email
        userId
      }
      isLiked
    }
  }
`;

export const GET_POST_LIKES_QUERY = gql`
  query GetPostLikes($postId: String!) {
    getPostLikes(postId: $postId) {
      likeId
      profilePicture
      userId
      username
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query GetPostComments($postId: String!) {
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
  mutation PostComment($postId: String!, $comment: String!) {
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

export const GET_USER_POST = gql`
  query GetPostsByUserId($userId: String!) {
    getPostsByUserId(userId: $userId) {
      likeCount
      postCaption
      postId
      postImage
      createdAt
      user {
        username
        email
      }
      isLiked
    }
  }
`;
