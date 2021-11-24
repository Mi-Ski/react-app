import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.scss';

const Expenses = (props) => {
	const [selected, setSelected] = useState('2020');

	const changeFilterHandler = (state) => {
		setSelected(state);
		console.log(selected, 'U');
	};
	return (
		<Card className="expenses">
			<ExpenseFilter value={selected} onChangeFilter={changeFilterHandler}/>
			{props.items.map((el) => (
				<ExpenseItem
					title={el.title}
					amount={el.amount}
					date={el.date}
					key={el.id}
				></ExpenseItem>
			))}
		</Card>
	);
};

export default Expenses;
