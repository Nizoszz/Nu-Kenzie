import "./index.css";

import NuKenzie from "../../../assets/img/NuKenzie.svg";
export const DescriptionContent = ({ setHomePage }) => {
  const handlePage = () => {
    return setHomePage(true);
  };
  return (
    <div className="descriptionContent">
      <img src={NuKenzie} alt="Nu Kenzie" />
      <h1>Centralize o controle das suas finanças</h1>
      <span>de forma rápida e segura</span>
      <button type="button" onClick={handlePage}>
        Iniciar
      </button>
    </div>
  );
};
