import { useState } from "react";

const COLORS = ["red", "blue", "green", "yellow"];

export default function ColorSwitcher() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        {COLORS.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>

      <div
        style={{
          backgroundColor: color,
          width: 200,
          height: 200,
          marginTop: 10,
        }}
      />
    </div>
  );
}
