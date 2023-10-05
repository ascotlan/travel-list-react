import { useState } from "react";

export default function Form({handleItemList}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!description) {
      return;
    }

    handleItemList({ id: Date.now(), description, quantity, packed: false });
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => setQuantity(parseInt(event.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={(event) => setDescription(event.target.value)}
        value={description}
        type="text"
        placeholder="Item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
