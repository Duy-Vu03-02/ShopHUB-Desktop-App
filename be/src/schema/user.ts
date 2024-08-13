// Type
export const userTypeDefs = `
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
`;

export const addressTypeDefs = `
    type Address {
    street: String
    city: String
    country: String
  }
`;

// Query
export const userQuery = `
    user(phone: String, email: String, password: String!): User
`;

// Mutation
export const userMutation = `
    createUser(
      phone: String
      username: String
      email: String
      password: String!
    ): User
`;
