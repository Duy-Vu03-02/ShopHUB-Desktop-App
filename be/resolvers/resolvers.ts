import { login } from "../services/userServices";

export const resolvers = {
  Query: {
    user: async (parent: any, args: any) => {
      return await login(args);
    },

    product: async (parent: any, args: any) => {
      return;
    },

    notification: async (parent: any, args: any) => {
      return;
    },

    conversation: async (parent: any, args: any) => {
      return;
    },

    message: async (parent: any, args: any) => {
      return;
    },
  },
};
