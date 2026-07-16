import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register/Register";
import Main_Layout from "./Layout/Main_Layout";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Products from "./pages/Products";
import Auth_Layout from "./Layout/Auth_Layout";
import Login from "./components/Login/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Auth_Layout />} >

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>


      {/* Main Layout Routes */}
      <Route element={<Main_Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
