import React,{useState} from 'react'
import FormExpense from './FormExpense'
import ExpenseItem from '../Expenses/ExpenseItem'
import { expense } from "../../data/expense";

export default function ComponentHandler(props) {
  const[expenses, setExpenses] = useState(expense);
    const expenseDataHandler= (childData) =>{
        // console.log(expenseData)
        // props.receivingData(expenseData)
        

       setExpenses((preExpense) => [childData, ...preExpense]);
    }
  return (
    <div className='container'>
      <FormExpense onSubmitData={expenseDataHandler }/>
      <ExpenseItem expenseData={expenses}/>
    </div>
  )
}
