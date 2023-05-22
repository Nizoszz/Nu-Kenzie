import "./index.css";
export const SelectEntry = ({ formValue, setFormValue }) => {
  return (
    <div className="selectBox">
      <label htmlFor="type">Tipo de valor</label>
      <select
        name="type"
        onChange={(event) =>
          setFormValue({ ...formValue, type: event.target.value })
        }
      >
        <option value="Entrada">Entrada</option>
        <option value="Saída">Despesa</option>
      </select>
    </div>
  );
};
