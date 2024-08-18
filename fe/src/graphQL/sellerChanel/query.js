import { gql } from "@apollo/client";

export const createProduct = gql`
  mutation createProduct(
    $idShop: ID!
    $name: String!
    $description: DescriptionInput!
    $price: Float!
    $type: [String]
    $quantity: [QuantityInput]!
  ) {
    createProduct(
      idShop: $idShop
      name: $name
      description: $description
      price: $price
      type: $type
      quantity: $quantity
    ) {
      id
    }
  }
`;
