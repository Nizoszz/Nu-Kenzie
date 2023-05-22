import "./index.css";

import { useState } from "react";

import { InputDescription } from "./InputDescription";
import { InputValue } from "./InputValue";
import { SelectEntry } from "./SelectEntry";
import { ButtonEntryValue } from "./ButtonEntryValue";

export const Form = ({ addValue, listTransactions }) => {
  const [formValue, setFormValue] = useState({
    id: "",
    description: "",
    type: "Entrada",
    value: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const changedValue =
      formValue.type.toLowerCase() === "saída"
        ? formValue.value * -1
        : formValue.value;
    formValue.value = changedValue;
    addValue(formValue);
    setFormValue({ id: "", description: "", type: "Entrada", value: "" });
  };
  return (
    <form className="formBox" onSubmit={handleSubmit}>
      <InputDescription formValue={formValue} setFormValue={setFormValue} />
      <div className="valueBox">
        <InputValue formValue={formValue} setFormValue={setFormValue} />
        <SelectEntry formValue={formValue} setFormValue={setFormValue} />
      </div>
      <ButtonEntryValue
        formValue={formValue}
        setFormValue={setFormValue}
        listTransactions={listTransactions}
      />
    </form>
  );
};
