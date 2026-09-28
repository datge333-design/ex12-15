import { useState, useEffect } from "react";

export default function CountdownTimer({ initialValue }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return; // về 0 thì không tạo interval nữa -> dừng timer
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId); // dọn dẹp khi unmount hoặc timeRemaining đổi
    };
  }, [timeRemaining]);

  return <p>Time Remaining: {timeRemaining}</p>;
}
