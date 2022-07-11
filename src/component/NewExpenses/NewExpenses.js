import React from "react";
import Form from "./Form";
import "./NewExpenses.css";

function NewExpenses(props) {
  const saveExpensesData = (recievedData) => {
    const actualData = {
      ...recievedData,
      id: Math.random().toString(),
    };

    props.newExpense(actualData);
  };
  return (
    <div className='new-expense'>
      <Form onSaveExpenses={saveExpensesData} />
    </div>
  );
}

export default NewExpenses;
