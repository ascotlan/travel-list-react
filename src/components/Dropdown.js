export default function Dropdown({ value, onChange, array, isInt }) {
  return (
    <select
      value={value}
      onChange={(event) =>
        onChange(isInt ? parseInt(event.target.value) : event.target.value)
      }
    >
      {array.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
