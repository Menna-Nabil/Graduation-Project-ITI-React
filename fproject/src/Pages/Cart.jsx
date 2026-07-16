import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(ProductContext);

  
  const total = cart?.reduce((sum, item) => sum + item.price * item.qty, 0) || 0;

  return (
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          color: "#e91e63",
          textAlign: "center",
          marginBottom: "30px",
          marginTop: "55px",
          fontSize: "28px",
        }}
      >
         Your Cart
      </h2>

      {(!cart || cart.length === 0) ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Your cart is empty
        </p>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "15px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
              >
               
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "120px",
                    height: "90px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                
                <div style={{ flex: 1 }}>
                  <strong style={{ fontSize: "18px" }}>{item.title}</strong>
                  <div style={{ color: "#777", marginTop: "4px" }}>
                    {item.price.toFixed(2)}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#f5f5f5",
                    borderRadius: "6px",
                    padding: "4px 10px",
                  }}
                >
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    style={{
                      border: "none",
                      background: "transparent",
                      fontSize: "18px",
                      cursor: "pointer",
                      color: "#e91e63",
                    }}
                  >
                    -
                  </button>
                  <div style={{ fontWeight: "bold" }}>{item.qty}</div>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    style={{
                      border: "none",
                      background: "transparent",
                      fontSize: "18px",
                      cursor: "pointer",
                      color: "#e91e63",
                    }}
                  >
                    +
                  </button>
                </div>

               
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: "#777", fontSize: "14px" }}>Subtotal</div>
                  <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {(item.price * item.qty).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginTop: "8px",
                      background: "#fff",
                      border: "1px solid #e91e63",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      color: "#e91e63",
                      fontSize: "14px",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          
          <div
            style={{
              marginTop: "30px",
              maxWidth: "800px",
              marginInline: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "20px",
              background: "#fff",
              padding: "15px 20px",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div>Total:{total.toFixed(2)}</div>
            <button
              style={{
                background: "#e91e63",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={() => alert("Proceed to checkout")}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
