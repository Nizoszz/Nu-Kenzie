import "./index.css";

import { List } from "./List";
import { Form } from "./Form";
import { TotalMoney } from "./TotalMoney";
import { Header } from "./Header";

export const HomePage = ({
  setHomePage,
  listTransactions,
  addValue,
  removeValue,
  setFilter,
}) => {
  return (
    <>
      <Header setHomePage={setHomePage} />
      <main>
        <div className="containerMain">
          <section className="sectionValues">
            <Form addValue={addValue} listTransactions={listTransactions} />
            <TotalMoney listTransactions={listTransactions} />
          </section>
          <section className="sectionList">
            <List
              listTransactions={listTransactions}
              removeValue={removeValue}
              setFilter={setFilter}
            />
          </section>
        </div>
      </main>
    </>
  );
};
