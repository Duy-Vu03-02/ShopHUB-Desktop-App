// Type
export const productTypeDefs = `
    type Product {
    id: ID
    idShop: ID
    name: String
    description: Description
    price: Float
    type: [String]
    reviews: [String]
    quantity: [Quantity]
    sold: Int
    totalStar: Float
    freeShip: FreeShip
    discountCode: DiscountCode
    totalProducts: Int
    shopper: Shopper
  }

  type Description {
      content:  String 
      imgs: [ String ]
      country:  String 
      brand:  String 
      material:  String 
      style:  String 
      sendFrom:  String 
      design:  String 
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
  type FreeShip {
    type: Boolean
    minPrice: Float
  }
  type DiscountCode {
    type: Boolean
    value: Float
  }
`;

// Input
export const proudctInput = `
  input DescriptionInput{
      content:  String 
      imgs: [ String ]
      country:  String 
      brand:  String 
      material:  String 
      style:  String 
      sendFrom:  String 
      design:  String 
  }

  input QuantityInput {
    color: String!
    sizes: [SizeInput]!
    images: [String]
  }
  input SizeInput {
    size: String!
    total: Int!
  }
  input FreeShipInput {
    type: Boolean
    minPrice: Float
  }
  input DiscountCodeInput {
    type: Boolean
    value: Float
  }
`;
// Query
export const productQuery = `
    product(id: ID!): Product
    top8Product: [Product]
    productByShop(id: ID!): [Product]
`;

// Mutation
export const productMutaion = `
    createProduct(
      idShop: ID!
      name: String!
      description: DescriptionInput!
      price: Float!
      type: [String]
      quantity: [QuantityInput]!
      discountCode: DiscountCodeInput
      freeShip: FreeShipInput
    ): Product
`;
