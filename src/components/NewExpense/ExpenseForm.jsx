import { useState } from 'react';
import './ExpenseForm.scss';


const ExpenseForm = (props) => {
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [enteredAmount, setEnteredAmount] = useState('');
	// const [enteredDate, setEnteredDate] = useState('');
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const titleChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, title: e.target.value };
		});
	};
	const amountChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, amount: e.target.value };
		});
	};
	const dateChangeHandler = (e) => {
		setUserInput((prevState) => {
			return { ...prevState, date: e.target.value };
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		props.onSaveExpenseData(userInput);
		setUserInput( {
			title: '',
			amount: '',
			date: ''
		})
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={userInput.title}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={userInput.amount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={userInput.date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
