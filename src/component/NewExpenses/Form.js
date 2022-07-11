import React, { useState } from "react";
import "./Form.css";
//2tIS9gC0kirzN*Z0
function Form(props) {
  const [titleChange, setEnteredTitleChanger] = useState("");
  const [dateChange, setEnteredDateChanger] = useState("");
  const [amountChange, setEnteredAmountChanger] = useState("");

  const titleClickHandler = (e) => {
    setEnteredTitleChanger(e.target.value);
  };

  const amountClickHandler = (e) => {
    setEnteredAmountChanger(e.target.value);
  };

  const dateClickHandler = (e) => {
    setEnteredDateChanger(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();

    const Data = {
      title: titleChange,
      amount: amountChange,
      date: new Date(dateChange),
    };

    props.onSaveExpenses(Data);
    setEnteredTitleChanger("");
    setEnteredAmountChanger("");
    setEnteredTitleChanger("");
  };
  return (
    <form onSubmit={formHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            placeholder='enter Expense'
            value={titleChange}
            onChange={titleClickHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.1'
            value={amountChange}
            onChange={amountClickHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            value={dateChange}
            onChange={dateClickHandler}
          />
        </div>

        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
