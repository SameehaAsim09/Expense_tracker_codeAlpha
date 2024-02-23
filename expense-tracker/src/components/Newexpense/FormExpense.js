import React, { useState } from 'react'
import "../ExpenseForm.css"
export default function FormExpense(props) {
  const [enteredtitle, setTitle] = useState('');
  // const[valid, setValid] = useState(true)
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    if(enteredtitle.trim().length){

    }
  }
  const [enteredamount, setEnteredAmount] = useState(0);
  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const [entereddate, setEnteredDate] = useState('date');
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: enteredtitle,
      amount: enteredamount,
      date: new Date(entereddate),
    };
    // console.log(expenseData); 
    setTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onSubmitData(expenseData);
  };
  

  return (
    <form onSubmit ={submitHandler} >
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" placeholder="Title Here"
          onChange={titleChangeHandler} />
      </div>
      <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="1" step="1" placeholder="Amount Here" onChange={AmountChangeHandler} />
      </div>
      <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-02" max="2023-12-31" placeholder="Date Here" onChange={dateChangeHandler} />
      </div>
      <div className='add_expense'>
          <button className='new-expense__actions' >Add Expense</button>
      </div>
    </div>
  </form>
  )
}
