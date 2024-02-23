import React from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseCard(props) {
  return (
    <div className="expense-item">
      <div className="expense-date">
        <ExpenseDate date={props.date} />
      </div>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price" >
        <h2>$ {props.amount}</h2>
      </div>
    </div>
  );
}
