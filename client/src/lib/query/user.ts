import { gql } from "graphql-request";

export const GET_USER_BY_ID_QUERY = gql`
  query getUserById($userId: String!) {
    getUserById(userId: $userId) {
      createdAt
      email
      profilePicture
      userId
      username
    }
  }
`;
