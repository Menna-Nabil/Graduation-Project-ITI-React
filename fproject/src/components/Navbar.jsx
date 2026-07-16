import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaSearch, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function Navbar() {
  const { cart, favorites, search, setSearch, user, logout } = useContext(ProductContext);

  return (
    <nav
      style={{
        background: "#d64064",
        padding: "12px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      
      <Link to="/" style={{fontSize: "28px",fontWeight: "bold",color: "#fff",textDecoration: "none", }}>
        PinkShop
      </Link>


      <div style={{
          maxWidth: "400px",
          margin: "0 30px",
          display: "flex",
          alignItems: "center",
          background: "#fff",
          borderRadius: "25px",
          padding: "6px 12px",
        }}
      >
        <FaSearch style={{ color: "#d64064", marginRight: "8px" }} />
        <input type="text" placeholder="Search..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ border: "none",outline: "none",flex: 1,fontSize: "15px",}}/>
      </div>

    
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {!user ? (
          <>
            <Link to="/register" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>
              Register
            </Link>
            <Link to="/login" style={{ color: "#fff", fontWeight: "bold", textDecoration: "none" }}>
              Login
            </Link>
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#fff" }}>
            <FaUserCircle size={22} />
            <span>Welcome, {user?.fName}</span>
            <button
              onClick={logout}
              style={{
                background: "#fff",
                color: "#d64064",
                border: "none",
                borderRadius: "20px",
                padding: "5px 12px",
                fontWeight: "bold",
              }}
            >
              Logout
            </button>
          </div>
        )}

        
        <Link to="/favorites" style={{ position: "relative", color: "#fff" }}>
          <FaHeart size={22} />
          {favorites?.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                fontSize: "12px",
                padding: "2px 6px",
              }}
            >
              {favorites.length}
            </span>
          )}
        </Link>

       
        <Link to="/cart" style={{ position: "relative", color: "#fff" }}>
          <FaShoppingCart size={22} />
          {cart?.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-10px",
                background: "red",
                color: "white",
                borderRadius: "50%",
                fontSize: "12px",
                padding: "2px 6px",
              }}
            >
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
