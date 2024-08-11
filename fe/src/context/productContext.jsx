import { createContext, useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState("");

  return (
    <ProductContext.Provider value={{ setProductData, productData }}>
      {children}
    </ProductContext.Provider>
  );
};
