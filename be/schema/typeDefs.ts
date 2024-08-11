import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID
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
    username: String
    email: String
    password: String
    avatar: String
    address: Address
    payment: [ID]
  }

  type Product {
    id: ID
    name: String
    description: String
    price: Float
    imges: [String]
    color: [String]
    type: [String]
    total: Int
    review: [Review]
  }

  type Notification {
    id: ID
    idUser: ID
    message: String
    isRead: Boolean
  }

  type Conversation {
    id: ID
    member: [ID]
    lastMessage: String
  }

  type Message {
    id: ID
    idConversation: ID
    sender: ID
    img: [String]
  }

  type Review {
    content: String
    idUser: ID
    like: Int
  }

  type Address {
    street: String
    city: String
    country: String
  }

  ### ROOT TYPE
  type Query {
    user: User
    shopper: Shopper
    product: Product
    notification: Notification
    conversation: Conversation
    message: Message
  }
`;
