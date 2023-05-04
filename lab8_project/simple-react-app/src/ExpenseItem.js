import React from 'react';
import ExpenseDate from './ExpenseDate';

export const ExpenseItem = (props) => {
  const expenseDate = props.date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="card expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount.toFixed(2)}</div>
      </div>
    </div>
  );
}
