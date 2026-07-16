import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

 function Footer() {
  return (
    <footer
      style={{background: "#d64064",padding: "20px",textAlign: "center",marginTop: "20px",}}>

      <p style={{ color: "white", marginBottom: "10px", fontWeight:"bold"}}>
        © 2025 PinkShop | All Rights Reserved
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", fontWeight:"bold"}}>

        <a href="#" style={{ color: "white" }}>
          <FaFacebook />
        </a>

        <a href="#" style={{ color: "white" }}>
          <FaInstagram />
        </a>
        
        <a href="#" style={{ color: "white" }}>
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
} 
export default Footer;