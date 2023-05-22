import "./index.css";

export const Card = ({ transactions, removeValue }) => {
  return (
    <>
      {transactions.type.toLowerCase() !== "entrada" ? (
        <li className="cardDespesa">
          <div>
            <h3>{transactions.description}</h3>
            <span>{transactions.type}</span>
          </div>
          <div>
            <span>R$ {transactions.value}</span>
            <button
              type="button"
              onClick={() => removeValue(transactions.id)}
            ></button>
          </div>
        </li>
      ) : (
        <li className="card">
          <div>
            <h3>{transactions.description}</h3>
            <span>{transactions.type}</span>
          </div>
          <div>
            <span>R$ {transactions.value}</span>
            <button
              type="button"
              onClick={() => removeValue(transactions.id)}
            ></button>
          </div>
        </li>
      )}
    </>
  );
};
