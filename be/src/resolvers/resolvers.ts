import { registerShop } from "../services/ShopperServices";
import { createProduct, getProductById } from "../services/ProductServices";
import { login, register } from "../services/UserServices";

export const resolvers = {
  Query: {
    user: async (parent: any, args: any) => {
      return await login(args);
    },

    product: async (parent: any, args: any) => {
      return await getProductById(args);
    },

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
