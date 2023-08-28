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

export const GET_ONE_USER = gql`
  query GetOneUser($input: GetOneUserInput!) {
    getOneUser(input: $input) {
      __typename
      ... on GetOneUser {
        name
        active
        permissions
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      __typename
      ... on LoginData {
        id
        name
        permissions
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ... on Message {
        message
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($input: UpdateUserInput!) {
    __typename
    updateUser(input: $input) {
      ... on Message {
        message
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;

export const DELETE = gql`
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      ... on Message {
        message
      }
      ... on Error {
        errorMessage
      }
    }
  }
`;
