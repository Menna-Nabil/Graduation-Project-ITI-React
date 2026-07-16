import { useEffect, useState, useContext } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slider1 from "../assets/slider2.jfif";
import slider2 from "../assets/slider3.jfif";
import slider3 from "../assets/a4f255723a0bf91d3bbff22af7aa7e07.jpg";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import Contact from "../components/Contact";
import About from "../components/About";
import { Link } from "react-router-dom";


function Home() {
  const { products, addToCart, Favoritee, search } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const Filterhandler = ({ category, sort }) => {
    if (!products) return;
    let updated = [...products];

    if (category && category !== "All") 
      updated = updated.filter(p => p.category === category);

    if (search) 
      updated = updated.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

    if (sort === "low-high") 
      updated.sort((a, b) => a.price - b.price);

    else if (sort === "high-low") 
      updated.sort((a, b) => b.price - a.price);

    setFilteredProducts(updated);
  };

  useEffect(() => {
    if (products) Filterhandler({ category: "All", sort: "" });
  }, [products, search]);

  return (
    <div>

      <Carousel id="slider" style={{ marginBottom: "50px" }}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="Slide 1"
            style={{ height: "600px", objectFit: "cover" }}
          />
          <Carousel.Caption
            style={{top: "50%",textAlign: "center", marginTop:"-90px",}} >

            <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#fff" ,}}>
              Pink Shopping
            </h1>

            <p style={{ fontSize: "1.5rem", fontWeight: 500, color: "#fff" }}>
              Explore our exclusive collection of the latest trends
            </p>
          
            <Link to="/products">
    <button
      style={{background: "#fff",color: "#d64064",border: "none",borderRadius: "30px",
        padding: "12px 28px",fontWeight: "bold",marginTop: "15px",fontSize: "1.1rem",}} >
      SHOP NOW
    </button>
  </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Slide 2"
            style={{ height: "600px", objectFit: "cover", }}
          />

          <Carousel.Caption
            style={{top: "50%",textAlign: "center", marginTop:"-90px",}}>

            <h1 style={{ fontSize: "4rem", fontWeight: "bold", color: "#fff" }}>
              Pink Shopping
            </h1>

            <p style={{  fontSize: "1.5rem", fontWeight: 500, color: "#fff" }}>
              Explore our exclusive collection of the latest trends
            </p>

             <Link to="/products">
    <button
      style={{background: "#fff",color: "#d64064",border: "none",borderRadius: "30px",
        padding: "12px 28px",fontWeight: "bold",marginTop: "15px",fontSize: "1.1rem",}}>
      SHOP NOW
    </button>
  </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Slide 3"
            style={{ height: "600px", objectFit: "cover",}}
          />
          
        </Carousel.Item>
      </Carousel>

     
      <Filter Filterr={Filterhandler} />

      <h2
        style={{textAlign: "center", marginBottom: "20px", color: "#d64064",fontWeight: "bold",
          fontSize: "3rem", }}>
        Products
      </h2>

      {!filteredProducts || filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No products found</p>
      ) : (
        <div
          style={{display: "flex",flexWrap: "wrap",gap: "20px",padding: "0 20px 50px",justifyContent: "center"}} >

          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              Favoritee={Favoritee}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

<div id="about">
    <About />
  </div>
      
      <div id="contact">
    <Contact />
  </div>
    </div>
  );
}
export default Home;
