import "./index.css";

export const ButtonEntryValue = ({
  formValue,
  setFormValue,
  listTransactions,
}) => {
  const insertId = () => {
    return setFormValue({ ...formValue, id: listTransactions.length + 1 });
  };
  return (
    <button type="submit" className="insertButton" onClick={insertId}>
      Inserir valor
    </button>
  );
};
