import { useState } from "react";
import UserPosts from "./UserPosts";
import CountdownTimer from "./CountdownTimer";
import WindowSize from "./WindowSize";
import ValidatedInput from "./ValidatedInput";

// Đặt ngoài component để hàm không bị tạo mới mỗi lần render
const isAtLeast5Chars = (value) => value.length >= 5;

export default function App() {
  const [userId, setUserId] = useState(1);
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ padding: 20 }}>
      <h2>1. Data Fetching</h2>
      <select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((id) => (
          <option key={id} value={id}>
            User {id}
          </option>
        ))}
      </select>
      <UserPosts userId={userId} />

      <h2>2. Countdown Timer</h2>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Unmount timer" : "Mount timer"}
      </button>
      {showTimer && <CountdownTimer initialValue={10} />}

      <h2>3. Window Resize Listener</h2>
      <WindowSize />

      <h2>4. Form Input Validation</h2>
      <ValidatedInput
        validationFunction={isAtLeast5Chars}
        errorMessage="Input must be at least 5 characters"
      />
    </div>
  );
}
