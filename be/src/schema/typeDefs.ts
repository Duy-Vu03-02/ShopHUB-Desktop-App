import { gql } from "apollo-server-express";
import { addressTypeDefs, userMutation, userQuery, userTypeDefs } from "./user";
import { shopperMutation, shopperQuery, shopperTypeDefs } from "./shoppper";
import {
  productMutaion,
  productQuery,
  productTypeDefs,
  proudctInput,
} from "./product";

export const typeDefs = gql`
  scalar Date
  scalar Upload


  ### TYPE
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  ${addressTypeDefs}
  ${userTypeDefs}
  ${shopperTypeDefs}
  ${productTypeDefs}

  ### INPUT
  ${proudctInput}

  ### ROOT TYPE
  type Query {
    ${userQuery}
    ${shopperQuery}
    ${productQuery}
  }

  type Mutation {
    ${userMutation}
    ${shopperMutation}
    ${productMutaion}
  }
`;

// export const typeDefs = gql`
//   ### TYPE
//   ${userTypeDefs}
//   ${addressTypeDefs}
//   ${shopperTypeDefs}
//   ${productTypeDefs}

//   type Notification {
//     id: ID
//     idUser: ID
//     message: String
//     isRead: Boolean
//   }

//   type Conversation {
//     id: ID
//     members: [ID]
//     lastMessage: String
//   }

//   type Message {
//     id: ID
//     idConversation: ID
//     sender: ID
//     images: [String]
//   }

//   type Review {
//     id: ID
//     idProduct: ID
//     idUser: ID
//     star: Int
//     content: String
//     like: Int
//   }

//   ### INPUT
//   ${proudctInput}

//   ### ROOT TYPE
//   type Query {
//     ${userQuery}
//     ${shopperQuery}
//     ${productQuery}

//     notification(id: ID!): Notification
//     conversation(id: ID!): Conversation
//     message(id: ID!): Message
//   }

//   type Mutation {
//     ${userMutation}
//     ${shopperMutation}
//     ${productMutaion}

//   }
// `;
