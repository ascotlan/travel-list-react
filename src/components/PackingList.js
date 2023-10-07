import PackingListItem from "./PackingListItem";
import Dropdown from "./Dropdown";
import useSort from "../hooks/use-sort";

const options = [
  { option: "sort by input order", sortValue: (item) => item.id },
  { option: "sort by description", sortValue: (item) => item.description },
  { option: "sort by packed status", sortValue: (item) => item.packed },
];

export default function PackingList({
  AllItems,
  handleCheckedItems,
  checked,
  handleDelete,
  handleDeleteAll,
}) {
  const { sortBy, handleSortOrder, sortedData } = useSort(options, AllItems);

  const renderedItems = sortedData.map((item) => (
    <PackingListItem
      key={item.id}
      item={item}
      handleCheckedItems={handleCheckedItems}
      checked={checked}
      handleDelete={handleDelete}
    />
  ));

  return (
    <div className="list">
      <ul>{renderedItems}</ul>
      <div className="actions">
        <Dropdown
          value={sortBy}
          onChange={handleSortOrder}
          array={options.map((option) => option.option)}
          isInt={false}
        />
        <button onClick={handleDeleteAll}>CLEAR LIST</button>
      </div>
    </div>
  );
}
