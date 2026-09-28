import { CartProvider } from "./CartContext";
import DishesList from "./DishesList";
import Cart from "./Cart";

export default function CartApp() {
  return (
    <CartProvider>
      <div style={{ display: "flex", gap: 40, padding: 20 }}>
        <div style={{ flex: 2 }}>
          <DishesList />
        </div>
        <div style={{ flex: 1 }}>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}
