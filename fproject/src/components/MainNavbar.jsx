import { Link } from "react-router-dom";


function MainNavbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: "60px",
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        background: "rgba(243,99,132,0.7)",
        padding: "12px 0",
        zIndex: 900,
      }}
    >
      <Link to="/"
        style={{color: "#fff",textDecoration: "none",fontWeight: "bold",fontSize: "20px", }}>
        Home
      </Link>


      <a href="#about"
    style={{color: "#fff",textDecoration: "none",fontWeight: "bold",fontSize: "20px",}}>
    About
  </a>

      <Link to="/products"
        style={{color: "#fff",textDecoration: "none",fontWeight: "bold",fontSize: "20px",}}>
        Products
      </Link>


      <a href="#contact"
    style={{color: "#fff",textDecoration: "none",fontWeight: "bold",fontSize: "20px",}}>
    Contact
  </a>
  
    </nav>
  );
}

export default MainNavbar;
