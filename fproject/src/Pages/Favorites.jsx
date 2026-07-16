import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "../components/ProductCard";

function Favorites() {
  const { favorites, Favoritee, addToCart } = useContext(ProductContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{color: "#e91e63",textAlign: "center",marginBottom: "20px",marginTop: "55px",}} >
        Your Favorites
      </h2>

      {(!favorites || favorites.length === 0) ? (
        <p style={{ textAlign: "center" }}>No favorite products yet</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          
          {favorites.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              favorites={favorites}
              addToCart={addToCart}
              Favoritee={Favoritee}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
