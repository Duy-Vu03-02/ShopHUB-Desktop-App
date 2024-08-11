import { gql } from "@apollo/client";

export const login = gql`
  query userLogin($password: String!, $phone: String!) {
    user(password: $password, phone: $phone) {
      id
      username
      order
    }
  }
`;
