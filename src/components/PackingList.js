import PackingListItem from "./PackingListItem";

export default function PackingList({AllItems, handleCheckedItems, checked, handleDelete, handleDeleteAll}) {
  const renderedItems = AllItems.map((item) => (
    <PackingListItem key={item.id} item={item} handleCheckedItems={handleCheckedItems} checked={checked} handleDelete={handleDelete}/>
  ));

  return (
    <div className="list">
      <ul>{renderedItems}</ul>
    <div className="actions">
      <select>

      </select>
      <button onClick={handleDeleteAll}>CLEAR LIST</button>
    </div>
    </div>
  );
}
