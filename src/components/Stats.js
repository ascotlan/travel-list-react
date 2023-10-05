export default function Stats({ total, packed }) {
  return (
    <footer className="stats">
      {total === 0 && <em>Start adding some items to your packing list 🚀</em>}
      {total > 0 && <em>
        💼 You have {total} items on your list, and you already packed {packed}{" "}
        ({total ? Math.round((packed * 100) / total) : 0}%)
      </em>}
    </footer>
  );
}
