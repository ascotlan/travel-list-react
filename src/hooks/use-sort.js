import { useState } from "react";

export default function useSort(options, data) {
  const [sortBy, setSortBy] = useState(options[0].option);

  const handleSortOrder = (selection) => {
    setSortBy(selection);
  };

  let sortedData = data;
  const { sortValue } = options.find((option) => option.option === sortBy);

  sortedData = [...data].sort((a, b) => {
    const valueA = sortValue(a);
    const valueB = sortValue(b);

    if (typeof valueA === "string") {
      return valueA.localeCompare(valueB);
    } else if (typeof valueA === "boolean") {
      return (valueA === valueB) ? 0 : valueA ? 1 : -1; 
    } else {
      return valueA - valueB;
    }
  });

  return {
    sortBy,
    handleSortOrder,
    sortedData,
  };
}
