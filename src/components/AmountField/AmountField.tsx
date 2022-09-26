interface AmountFieldProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
}

const AmountField: React.FC<AmountFieldProps> = ({ value, onChange, min }) => (
  <span className="font-mono select-none">
    <button onClick={() => onChange(value + 1)}>+</button> {value}{" "}
    <button
      onClick={() => onChange(value - 1)}
      disabled={min !== undefined && min >= value}
    >
      -
    </button>
  </span>
);

export default AmountField;
