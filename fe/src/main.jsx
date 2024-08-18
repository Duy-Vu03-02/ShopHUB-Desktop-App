// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL/apolloClient";
import { UserProvider } from "./context/userContext";
import { ProductProvider } from "./context/productContext";
import { SellerProvider } from "./sellerChanel/context/sellerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UserProvider>
        <SellerProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </SellerProvider>
      </UserProvider>
    </ApolloProvider>
  </React.StrictMode>
);
