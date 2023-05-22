import "./index.css";

export const TotalMoney = ({ listTransactions }) => {
  const total = () => {
    const totalValue = listTransactions.reduce((acc, prevValue) => {
      return (acc += prevValue.value);
    }, 0);

    return totalValue;
  };

  return (
    <>
      {total() <= 0 ? (
        <div className="totalMoneyBox">
          <div>
            <p>Valor total:</p>
            <span>O valor se refere ao saldo</span>
          </div>
          <p>
            R$
            {total()}
          </p>
        </div>
      ) : (
        <div className="totalMoneyBoxPlus">
          <p>Valor total:</p>
          <p>
            R$
            {total()}
          </p>
        </div>
      )}
    </>
  );
};
