export default function PackingListItem({
  item,
  checked,
  handleCheckedItems,
  handleDelete
}) {
  const { id, description, quantity} = item;

  const isPacked =
    checked.filter((checkedItem) => checkedItem.id === id).length > 0;

  return (
    <li>
      <input
        onChange={() => handleCheckedItems({ ...item, packed: !isPacked }, isPacked)}
        value={isPacked}
        checked={isPacked}
        type="checkbox"
      />
      <span style={isPacked ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDelete(id)}>❌</button>
    </li>
  );
}
