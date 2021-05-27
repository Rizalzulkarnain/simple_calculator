const Input = ({ onChange, value, disabled }) => {
  return (
    <>
      <input
        type="number"
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </>
  );
};

export default Input;
