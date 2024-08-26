import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const SellerContext = createContext("");

export const SellerProvider = ({ children }) => {
  const [shopData, setShopData] = useState("d");
  const [imgs, setImgs] = useState([]);
  const [addProduct, setAddProduct] = useState({
    idShop: "",
    name: "",
    type: "",
    description: {
      content: "",
      imgs: [],
      imgsFile: [],
      country: "",
      brand: "",
      material: "",
      style: "",
      sendFrom: "",
      design: "",
    },
    video: "",
    price: "",
    quantity: [
      {
        key: uuidv4(),
        data: {
          imgFile: "",
          img: "",
          color: "",
          sizes: [
            {
              size: "S",
              total: 1,
              checked: false,
            },
            {
              size: "M",
              total: 1,
              checked: false,
            },
            {
              size: "L",
              total: 1,
              checked: false,
            },
            {
              size: "XL",
              total: 1,
              checked: false,
            },
            {
              size: "XXL",
              total: 1,
              checked: false,
            },
            {
              size: "XXXL",
              total: 1,
              checked: false,
            },
          ],
        },
      },
    ],
    totalProduct: "",
  });

  return (
    <SellerContext.Provider
      value={{
        shopData,
        setShopData,
        addProduct,
        setAddProduct,
        imgs,
        setImgs,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};
