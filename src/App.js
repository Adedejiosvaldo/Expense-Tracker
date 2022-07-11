import React, { useState } from "react";

import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpenses";

const Dummy_Data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "DATA ",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e6",
    title: "Browsing ",
    amount: 40.12,
    date: new Date(2022, 5, 14),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const renderExpenseHandler = (recievedData) => {
    setExpenses((prevExpenses) => {
      return [recievedData, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses newExpense={renderExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
