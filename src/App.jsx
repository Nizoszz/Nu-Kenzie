import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { Index } from "./components/Index";

export const App = () => {
  const [homePage, setHomePage] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { id: 1, description: "Salário recebido", type: "Entrada", value: 2500 },
    { id: 2, description: "Conta de luz", type: "Saída", value: -150 },
  ]);
  const [filter, setFilter] = useState("Todos");

  const addValue = (value) => {
    setListTransactions([...listTransactions, value]);

  };

  const removeValue = (entry) => {
    const attList = listTransactions.filter(
      (transactions) => transactions.id !== entry
    );
    setListTransactions(attList);
  };

  const filterTransactions = () => {
    const filtered = listTransactions.filter((transactions) =>
      filter === "Todos" ? listTransactions : transactions.type === filter
    );

    return filtered;
  };


  return (
    <div className="App">
      {homePage ? (
        <HomePage
          setHomePage={setHomePage}
          listTransactions={filterTransactions()}
          addValue={addValue}
          removeValue={removeValue}
          setFilter={setFilter}
        />
      ) : (
        <Index setHomePage={setHomePage} />
      )}
    </div>
  );
};

export default App;
