import "./index.css";
export const InputValue = ({ formValue, setFormValue }) => {
  return (
    <div className="inputValueBox">
      <label htmlFor="value">Valor</label>
      <div className="inputValue">
        <input
          type="number"
          name="value"
          value={formValue.value}
          placeholder="0"
          onChange={(event) =>
            setFormValue({
              ...formValue,
              value: parseFloat(event.target.value),
            })
          }
          required
        />
        <span>R$</span>
      </div>
    </div>
  );
};
 