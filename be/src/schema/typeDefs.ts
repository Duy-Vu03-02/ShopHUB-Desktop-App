import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
    phone: String
    username: String
    email: String
    password: String
    avatar: String
    address: Address
    order: [ID]
    payment: [ID]
  }

  type Shopper {
    id: ID
    shopName: String
    phone: String
    email: String
    password: String
    avatar: String
    address: Address
    payment: [ID]
  }

  type Product {
    id: ID
    idShop: ID
    name: String
    description: String
    price: Float
    type: String
    reviews: [String]
    quantity: [Quantity]
    sold: Int
    totalStar: Float
  }

  type Notification {
    id: ID
    idUser: ID
    message: String
    isRead: Boolean
  }

  type Conversation {
    id: ID
    members: [ID]
    lastMessage: String
  }

  type Message {
    id: ID
    idConversation: ID
    sender: ID
    images: [String]
  }

  type Quantity {
    images: [String]
    color: String
    sizes: [Size]
  }

  type Size {
    size: String
    total: Int
  }

  type Review {
    id: ID
    idProduct: ID
    idUser: ID
    star: Int
    content: String
    like: Int
  }

  type Address {
    street: String
    city: String
    country: String
  }

  ### INPUT
  input QuantityInput {
    color: String!
    sizes: [SizeInput]!
    images: [String]
  }
  input SizeInput {
    size: String!
    total: Int!
  }

  ### ROOT TYPE
  type Query {
    user(phone: String, email: String, password: String!): User
    shopper(phone: String, email: String, password: String!): Shopper

    product(id: ID!): Product
    top8Product: [Product]

    notification(id: ID!): Notification
    conversation(id: ID!): Conversation
    message(id: ID!): Message
  }

  type Mutation {
    createUser(
      phone: String
      username: String
      email: String
      password: String!
    ): User

    createShopper(
      phone: String
      shopName: String!
      email: String
      password: String!
    ): Shopper

    createProduct(
      idShop: ID!
      name: String!
      description: String!
      price: Float!
      type: String
      quantity: [QuantityInput]!
    ): Product
  }
`;
