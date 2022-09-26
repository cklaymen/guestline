interface AmountFieldProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
}

const AmountField: React.FC<AmountFieldProps> = ({ value, onChange, min }) => (
  <span className="font-mono inline-flex flex-row gap-1">
    <button onClick={() => onChange(value + 1)}>+</button>
    <span>{value}</span>
    <button
      onClick={() => onChange(value - 1)}
      disabled={min !== undefined && min >= value}
    >
      -
    </button>
  </span>
);

export default AmountField;
