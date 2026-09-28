import { useCart } from "./CartContext";

export default function Cart() {
  const { cartItems, cartCount, cartTotal, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - $
                {(Number(item.price) * item.quantity).toFixed(2)}{" "}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <p>Total items: {cartCount}</p>
          <p>Total value: ${cartTotal.toFixed(2)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
