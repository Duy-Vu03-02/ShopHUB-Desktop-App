import { toApolloError } from "apollo-server-express";
import { ProductModel } from "../config/model/ProductModel";

export const createProduct = async (args: any) => {
  try {
    const {
      idShop,
      name,
      description,
      price,
      images,
      color,
      size,
      type,
      total,
    } = args;

    if (
      idShop &&
      name &&
      description &&
      price &&
      images &&
      color &&
      size &&
      type &&
      total
    ) {
      const newProduct = await ProductModel.create({
        idShop,
        name,
        description,
        price,
        images,
        color,
        size,
        type,
        total,
      });
      await newProduct.save();
      return newProduct;
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const getProductById = async (args: any) => {
  try {
    const { idProduct } = args;
    if (idProduct) {
      const product = await ProductModel.findById(idProduct);
      if (product) return product;
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const updateProduct = async (args: any) => {
  try {
    const {
      idProduct,
      name,
      description,
      price,
      images,
      color,
      size,
      type,
      total,
    } = args;

    let fieldUpdate: any = {};
    fieldUpdate["name"] = name?.trim();
    fieldUpdate["description"] = description?.trim();
    fieldUpdate["price"] = price ? price : undefined;
    fieldUpdate["images"] = images ? images : undefined;
    fieldUpdate["color"] = color?.trim();
    fieldUpdate["size"] = size?.trim();
    fieldUpdate["type"] = type?.trim();
    fieldUpdate["total"] = total ? total : undefined;

    if (Object.keys(fieldUpdate).length > 0) {
      const update = await ProductModel.findByIdAndUpdate(
        idProduct,
        {
          $set: fieldUpdate,
        },
        { new: true }
      );
      if (update) return update;
    }
    return;
  } catch (err) {
    console.error(err);
  }
};
