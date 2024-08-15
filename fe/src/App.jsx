import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./shopping/pages/Home";
import Login from "./shopping/pages/Login";
import Product from "./shopping/pages/Product";
import Cart from "./shopping/pages/Cart";
import Register from "./shopping/pages/Register";
import SellerChanel from "./sellerChanel/pages/SellerChanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shopping" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopper" element={<SellerChanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
