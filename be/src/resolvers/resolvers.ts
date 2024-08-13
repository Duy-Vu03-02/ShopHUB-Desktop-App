import { getShopById, registerShop } from "../services/ShopperServices";
import {
  createProduct,
  getProductById,
  getTopProductByStar,
  getProductByShop,
} from "../services/ProductServices";
import { login, register } from "../services/UserServices";

export const resolvers = {
  Query: {
    // == //
    user: async (parent: any, args: any) => {
      return await login(args);
    },

    // == //
    product: async (parent: any, args: any) => {
      return await getProductById(args);
    },
    top8Product: async () => {
      return await getTopProductByStar();
    },
    productByShop: async (parent: any, args: any) => {
      return await getProductByShop(args);
    },

    // == //
    // notification: async (parent: any, args: any) => {
    //   return;
    // },

    // conversation: async (parent: any, args: any) => {
    //   return;
    // },

    // message: async (parent: any, args: any) => {
    //   return;
    // },
  },

  // ============ //
  Product: {
    shopper: async (parent: any, args: any) => {
      return await getShopById(parent.idShop);
    },
  },

  Mutation: {
    createUser: async (parent: any, args: any) => {
      return await register(args);
    },

    createShopper: async (parent: any, args: any) => {
      return await registerShop(args);
    },

    createProduct: async (parent: any, args: any) => {
      return await createProduct(args);
    },
  },
};
