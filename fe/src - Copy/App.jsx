import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/shopping/Home";
import Login from "./pages/shopping/Login";
import Product from "./pages/shopping/Product";
import Test from "./componments/Test";
import Cart from "./pages/shopping/Cart";
import Register from "./pages/shopping/Register";
import SellerChanel from "./pages/sellerChanel/SellerChanel";
import Loadding from "./pages/Loadding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/shopping" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/test" element={<Test />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopper" element={<SellerChanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
