import { toApolloError } from "apollo-server-express";
import { ProductModel } from "../config/model/ProductModel";

export const createProduct = async (args: any) => {
  try {
    const {
      idShop,
      name,
      description,
      price,
      type,
      quantity,
      freeShip,
      discountCode,
    } = args;
    if (idShop && name && description && price && quantity && type) {
      const totalProducts = (
        await Promise.all(
          quantity.map(async (item: any) =>
            item.sizes.reduce((total: number, e: any) => total + e.total, 0)
          )
        )
      ).reduce((acc, curr) => acc + curr, 0);

      const newProduct = await ProductModel.create({
        totalProducts,
        idShop,
        name,
        description,
        price,
        type,
        quantity,
        ...(freeShip ? freeShip : undefined),
        ...(discountCode ? discountCode : undefined),
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
    const { id } = args;
    if (id) {
      const product = await ProductModel.findById(id);
      if (product) return product;
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const getTopProductByStar = async () => {
  try {
    const product = await ProductModel.find().sort({ totalStar: -1 }).limit(8);
    if (product.length > 0) {
      return product;
    }
    return;
  } catch (err) {
    console.error(err);
  }
};

export const getProductByShop = async (args: any) => {
  try {
    const { id } = args;
    console.log(id);
    if (id) {
      const products = await ProductModel.find({ idShop: id });
      if (products.length > 0) {
        return products;
      }
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
      quannity,
      type,
    } = args;

    let fieldUpdate: any = {};
    fieldUpdate["name"] = name?.trim();
    fieldUpdate["description"] = description?.trim();
    fieldUpdate["price"] = price ? price : undefined;
    fieldUpdate["images"] = images ? images : undefined;
    fieldUpdate["color"] = color?.trim();
    fieldUpdate["type"] = type?.trim();
    fieldUpdate["quannity"] = quannity ? quannity : undefined;

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
