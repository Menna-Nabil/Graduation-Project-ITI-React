import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import "../CSS/style.css"; 


 function ProductCard({ product, Favoritee, addToCart }) {
  return (
    <div className="product-card">

      <img src={product.image} alt={product.name}
      style={{width: "250px",height: "250px",objectFit: "cover",borderRadius: "12px", }}/>

      <h3 style={{ margin: "10px 0", color: "#d64064", fontSize:"1.5rem"}}>{product.name}</h3>
      <p style={{ color: "green", fontWeight: "bold" }}>{product.price} EGP</p>

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => addToCart(product)}
          style={{marginRight: "8px",padding: "6px 10px",background: "#fce4ec",border: "none", borderRadius: "8px",
            color: "#d64064", }}>
          <FaShoppingCart /> Add
        </button>

        <button
          onClick={() => Favoritee(product)}
          style={{ padding: "6px 10px",background: "#fce4ec",border: "none",borderRadius: "8px",}}>
          <FaHeart style={{ color: "#d64064" }} />
        </button>
      </div>

      <Link to={`/product/${product.id}`}>
        <button
          style={{marginTop: "10px",padding: "6px 12px", background: "#d64064",color: "#fff",border: "none",
            borderRadius: "8px",}}>
          <FaEye /> View
        </button>
      </Link>
    </div>
  );
}
export default ProductCard;
