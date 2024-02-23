import React, { useState } from "react";
import "./Expences.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseCard from "./ExpenseCard";  
import ExpenseChart from "./ExpenseChart";

export default function ExpenseItem(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const onChangeYearHandler = (year) => {
    setSelectedYear(year);
  };
  const filteredexpenses = props.expenseData.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  let expenseContent = <p>No Expenses Found</p>;
  if (filteredexpenses.length > 0) {
    expenseContent = filteredexpenses.map((expense) => (
      <ExpenseCard
      key={expense.id}
      title={expense.title} 
      date={expense.date}
      amount={expense.amount}
    />
    ))}
  return (
    <div>
      <ExpenseFilter
        selected={selectedYear}
        onSelectedYear={onChangeYearHandler}
      />
      <ExpenseChart dataPoints={filteredexpenses} />    
      {expenseContent}
    </div>
  );
  
}
