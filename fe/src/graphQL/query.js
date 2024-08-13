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
      id
      idShop
      name
      totalProducts
      description
      price
      quantity {
        images
        color
        sizes {
          size
          total
        }
      }
      type
      reviews
      totalStar
      sold
      shopper {
        avatar
        shopName
        totalReviews
        totalProduct
        percenReponse
        lastActive
        timeJoin
        follow
      }
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

export const productByShop = gql`
  query productByShop($id: ID) {
    productByShop(id: $id) {
      id
      name
      # quantity {
      #   images
      # }
      # price
      # totalStar
      # sold
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
