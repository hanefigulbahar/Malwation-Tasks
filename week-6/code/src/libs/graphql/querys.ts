import { gql } from "@apollo/client";

export const GET_USERS_LIST = gql`
  query GetUsersList($input: GetUsersListInput!) {
    getUsersList(input: $input) {
      __typename
      ... on GetUsersList {
        users {
          id
          name
          createdAt
          active
        }
      }
    }
  }
`;
