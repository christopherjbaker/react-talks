function Counter({ value, onChange }) {
  return (
    <div>
      <button onClick={() => onChange(value - 1)}>--</button>
      <span>{value}</span>
      <button onClick={() => onChange(value + 1)}>++</button>
    </div>
  );
}
