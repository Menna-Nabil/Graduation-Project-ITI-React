import { createContext, useState, useEffect } from "react";
import Products from "../Data/Products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(Products);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);


  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

 
  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, qty } : item
        )
      );
    }
  };

  
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  
  const Favoritee = (product) => {
    setFavorites((prevFav) =>
      prevFav.some((item) => item.id === product.id)
        ? prevFav.filter((item) => item.id !== product.id)
        : [...prevFav, product]
    );
  };

  
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        favorites,
        Favoritee,
        search,
        setSearch,
        user,
        login,
        logout,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
