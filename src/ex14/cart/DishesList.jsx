import { DISHES } from "./dishes";
import { useCart } from "./CartContext";

export default function DishesList() {
  const { addToCart, cartCount, cartTotal } = useCart();

  return (
    <div>
      <h2>Dishes</h2>
      {/* Bài 3: số lượng và giá trị giỏ hàng cập nhật ngay */}
      <p>
        <strong>Cart:</strong> {cartCount} item(s) - ${cartTotal.toFixed(2)}
      </p>

      {DISHES.map((dish) => (
        <div key={dish.id} style={{ borderBottom: "1px solid #ccc", padding: 10 }}>
          <h3>
            {dish.name} {dish.label && <small>({dish.label})</small>}
          </h3>
          <p>{dish.description}</p>
          <p>Price: ${dish.price}</p>
          <button onClick={() => addToCart(dish)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
