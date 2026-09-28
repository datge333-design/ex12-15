import { useState } from "react";

const ITEMS = ["Apple", "Banana", "Orange", "Mango", "Grape", "Pineapple", "Strawberry"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  const filteredItems = ITEMS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {filteredItems.length === 0 && <p>No results found.</p>}
    </div>
  );
}
