import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./shopping/pages/Home";
import Login from "./shopping/pages/Login";
import Product from "./shopping/pages/Product";
import Cart from "./shopping/pages/Cart";
import Register from "./shopping/pages/Register";
import SellerChanel from "./sellerChanel/pages/SellerChanel";
import Header from "./shopping/pages/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/shopping"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product"
          element={
            <>
              <Header />
              <Product />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <Cart />
            </>
          }
        />
        <Route
          path="/shopper"
          element={
            <>
              <Header /> <SellerChanel />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
