import { useState } from "react";

export default function DragDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
  const [draggingItem, setDraggingItem] = useState(null); // index của item đang kéo

  const handleDragStart = (index) => {
    setDraggingItem(index);
  };

  // Khi kéo item đang cầm đi qua một item khác -> đổi chỗ bằng splice
  const handleDragEnter = (index) => {
    if (draggingItem === null || draggingItem === index) return;

    const newItems = [...items];
    const [moved] = newItems.splice(draggingItem, 1); // lấy item ra
    newItems.splice(index, 0, moved);                  // chèn vào vị trí mới

    setItems(newItems);
    setDraggingItem(index); // item đang kéo giờ nằm ở vị trí mới
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0, width: 250 }}>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnd={handleDragEnd}
          style={{
            padding: 10,
            margin: "5px 0",
            border: "1px solid #999",
            cursor: "grab",
            background: draggingItem === index ? "#d0e8ff" : "#fff",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
