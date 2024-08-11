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

export const getProduct = gql`
  query detailProduct($id: ID!) {
    product(id: $id) {
      idShop
      name
      description
      price
      images
      color
      size
      type
      total
    }
  }
`;
