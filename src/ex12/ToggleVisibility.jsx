import { useState } from "react";

export default function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
      {visible && <p>Hello, this text can be shown or hidden!</p>}
    </div>
  );
}
