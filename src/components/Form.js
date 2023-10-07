import { useState } from "react";
import Dropdown from "./Dropdown";

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

  const handleQuantity = (selection) => {
    setQuantity(selection);
  };

  const options = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <Dropdown value={quantity} onChange={handleQuantity} array={options} isInt={true}/>
      
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
