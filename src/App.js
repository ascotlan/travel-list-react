import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [checked, setCheck] = useState(
    initialItems.filter((item) => item.packed === true)
  );

  const handleItemList = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleCheckedItems = (checkedItem, isChecked) => {
    if (isChecked) {
      setCheck(checked.filter((item) => item.id !== checkedItem.id));
    } else {
      setCheck([...checked, checkedItem]);
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    setCheck(checked.filter((item) => item.id !== id));
  };

  const handleDeleteAll = () => {
    setItems([]);
    setCheck([]);
  };

  return (
    <div className="App">
      <Logo />
      <Form handleItemList={handleItemList} />
      <PackingList
        AllItems={items}
        handleCheckedItems={handleCheckedItems}
        checked={checked}
        handleDelete={handleDelete}
        handleDeleteAll={handleDeleteAll}
      />
      <Stats total={items.length} packed={checked.length} />
    </div>
  );
}

export default App;
