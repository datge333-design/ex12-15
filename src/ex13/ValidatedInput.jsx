import { useState, useEffect } from "react";

export default function ValidatedInput({ validationFunction, errorMessage }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ border: isValid ? "1px solid #999" : "2px solid red" }}
      />
      {!isValid && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
