import { useState, useEffect } from "react";

export default function WindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // chỉ đăng ký 1 lần khi mount

  return (
    <p>
      Window size: {windowSize.width} x {windowSize.height}
    </p>
  );
}
