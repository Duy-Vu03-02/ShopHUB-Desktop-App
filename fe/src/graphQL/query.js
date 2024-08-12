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

export const getDetailProduct = gql`
  query detailProduct($id: ID!) {
    product(id: $id) {
      idShop
      name
      description
      price
      images
      type
    }
  }
`;

export const top8Product = gql`
  query top8Product {
    top8Product {
      id
      name
      quantity {
        images
      }
      price
      totalStar
      sold
    }
  }
`;

export const deltProduct = gql`
  mutation delProduct($id: ID!) {
    product(id: $id) {
      id
    }
  }
`;
