import "./index.css";

export const InputDescription = ({ formValue, setFormValue }) => {
  return (
    <div className="descriptionBox">
      <label htmlFor="description">Descrição</label>
      <div className="inputDescriptionBox">
        <input
          type="text"
          name="description"
          value={formValue.description}
          placeholder="Digite aqui sua descrição"
          onChange={(event) =>
            setFormValue({ ...formValue, description: event.target.value })
          }
          required
        />
        <span>Ex: Compra de roupas</span>
      </div>
    </div>
  );
};
