// Type
export const shopperTypeDefs = `
    type Shopper {
    id: ID
    shopName: String
    phone: String
    email: String
    password: String
    avatar: String
    address: Address
    payment: [ID]
    totalReviews: Int
    totalProduct: Int
    percenReponse: Int
    lastActive: String
    timeJoin: Date
    follow: Int
  }
`;

// Query
export const shopperQuery = `
     shopper(phone: String, email: String, password: String!): Shopper
`;

// Mutation
export const shopperMutation = `
    createShopper(
      phone: String
      shopName: String!
      email: String
      password: String!
    ): Shopper
`;
