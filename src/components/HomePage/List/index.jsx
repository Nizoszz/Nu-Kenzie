import "./index.css";
import { Card } from "./Card";
import DefaultImg from "../../../assets/img/NoCard.svg";

export const List = ({ listTransactions, removeValue, setFilter }) => {
  return (
    <div className="listBox">
      <div className="resumeFilterBox">
        <span>Resumo financeiro</span>
        <ul>
          <li>
            <button type="button" onClick={() => setFilter("Todos")} autoFocus>
              Todos
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setFilter("Entrada")}>
              Entradas
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setFilter("Saída")}>
              Despesas
            </button>
          </li>
        </ul>
      </div>
      {listTransactions.length > 0 ? (
        <ul className="contentRecipeList">
          {listTransactions.map((transactions, index) => (
            <Card
              key={index}
              transactions={transactions}
              removeValue={removeValue}
            />
          ))}
        </ul>
      ) : (
        <>
          <span>Você ainda não possui nenhum lançamento</span>
          <img src={DefaultImg} alt="" />
          <img src={DefaultImg} alt="" />
          <img src={DefaultImg} alt="" />
        </>
      )}
    </div>
  );
};
