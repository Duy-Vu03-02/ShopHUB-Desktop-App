import { createContext, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState("");
  const [listProducts, setListProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{ setProductData, productData, listProducts, setListProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};
