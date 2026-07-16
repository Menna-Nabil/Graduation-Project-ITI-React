import img2 from "../assets/img2.jpg";

function About() {
  return (
    <div
      style={{display: "flex",alignItems: "center",justifyContent: "center",
        padding: "50px 80px",gap: "40px",flexWrap: "wrap", 
      }}>
      

      <div style={{ flex: 1, minWidth: "300px" }}>
        <img src={img2} alt="About us"
          style={{width: "100%", borderRadius: "15px",boxShadow: "0 4px 10px rgba(0,0,0,0.1)",}}/>
      </div>

      
      <div style={{ flex: 1, minWidth: "300px" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#d64064" }}>
          About PinkShop
        </h2>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "20px", color: "#333" }}>
          Welcome to <b>PinkShop</b>, your ultimate destination for fashion and lifestyle.
          We bring you the latest trends, high-quality products, and a seamless shopping
          experience. Our mission is to make shopping easy, stylish, and enjoyable.
        </p>
        
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "10px", color: "#333" }}>
          Whether you're looking for the newest arrivals or timeless essentials, we’ve got
          you covered. Thank you for choosing us as your shopping partner!
        </p>
      </div>
    </div>
  );
}

export default About;
