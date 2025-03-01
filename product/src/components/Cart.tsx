import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem } from "../redux/cartSlice";
import { RootState } from "../redux/store"; // Import RootState
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart); // Define type for state
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
              <button onClick={() => dispatch(increment(item.id))}>+</button>
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>
                Delete
              </button>
            </div>
          ))}
          <p style={{ fontWeight: "bold" }}>
            Total Items: {cart.totalQuantity}
          </p>
          <p style={{ fontWeight: "bold" }}>Total Cost: ${cart.totalPrice}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "20px",
            }}
          >
            <Link to="/products">
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              >
                Continue Shopping
              </button>
            </Link>
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "10px",
              }}
              onClick={() => alert("Coming Soon")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
