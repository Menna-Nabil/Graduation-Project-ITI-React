import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import "../CSS/style.css";

function Products() {
  const { products, addToCart, Favoritee } = useContext(ProductContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{textAlign: "center",marginBottom: "20px",color: "#d64064",fontWeight: "bold",fontSize: "3rem",
          marginTop: "55px",
        }}>
        Our Products
      </h2>

      <div
        className="products-container"
        style={{display: "flex",flexWrap: "wrap",gap: "20px",justifyContent: "center",marginTop: "60px",
        }} >

        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{width: "250px",padding: "15px",border: "1px solid #ddd",borderRadius: "12px",
             boxShadow: "0 2px 8px rgba(0,0,0,0.1)",background: "#fff",
            }} >

            <img src={product.image} alt={product.name}
              style={{width: "100%",height: "180px",objectFit: "cover",borderRadius: "12px",
              }}/>

            <h3
              style={{margin: "10px 0",color: "#d64064",fontSize: "1.5rem",
              }} >
              {product?.name}
            </h3>
            <p style={{ color: "green", fontWeight: "bold" }}>
              {product?.price} EGP
            </p>

            <div style={{ margin: "10px 0" }}>

              <button
                onClick={() => addToCart(product)}
                style={{ marginRight: "8px",padding: "6px 10px",background: "#fce4ec",border: "none",
                  borderRadius: "8px",color: "#d64064",
                }}>
                <FaShoppingCart /> Add
              </button>

              <button
                onClick={() => Favoritee(product)}
                style={{padding: "6px 10px", background: "#fce4ec",border: "none", borderRadius: "8px",
                }} >
                <FaHeart style={{ color: "#d64064" }} />
              </button>

            </div>

            <Link to={`/product/${product.id}`}>
              <button
                style={{marginTop: "10px",padding: "6px 12px",background: "#d64064",color: "#fff",
                  border: "none", borderRadius: "8px",
                }}>
                <FaEye /> View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
