import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductContext } from "../Context/ProductContext";

function ProductDetails() {
  const { products, addToCart } = useContext(ProductContext); 
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return <p style={{ textAlign: "center" }}> Product not found</p>;
  }

  const AddToCarthandler = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }
    addToCart({ ...product, selectedSize });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img src={product.image} alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "12px", marginTop:"55px" }}
      />

      <h2 style={{ color: "#e91e63" }}>{product.name}</h2>
      <p style={{ fontWeight: "bold" }}>Category: {product.category}</p>
      <p style={{ fontWeight: "bold" }}>Quantity: {product.Quantity}</p>
      <p style={{ color: "green", fontWeight: "bold" }}>{product.price} EGP</p>

      {product.sizes && product.sizes.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontWeight: "bold" }}>Available Sizes:</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
            
            {product.sizes.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                style={{ padding: "6px 12px", border: selectedSize === size ? "2px solid #e91e63" : "1px solid #ccc",
                  background: selectedSize === size ? "#e91e63" : "#fff",
                  color: selectedSize === size ? "#fff" : "#000", borderRadius: "6px", }} >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={AddToCarthandler}
        style={{ marginTop: "15px", padding: "8px 15px", background: "#e91e63", color: "#fff", border: "none",
           borderRadius: "8px" }}>
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
