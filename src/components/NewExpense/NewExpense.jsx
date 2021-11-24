import React from 'react';
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm.jsx';

const NewExpense = (props) => {
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		props.onNewExpense(expenseData);
	}

	return <div className="new-expense">
		<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
	</div>;
};

export default NewExpense;
