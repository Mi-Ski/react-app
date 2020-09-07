import React, { Component } from "react";
import Person from "./Person/Person";
import classes from "./App.css";
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
	state = {
		persons: [
			{ id: 'sdff', name: "Max", age: 28 },
			{ id: 'dfsd', name: "Manu", age: 29 },
			{ id: '34l', name: "Stephanie", age: 26 },
		],
		personsVisibility: false
	};

	deletePersonHandler = (index) => {
		// slice without arguments just returns a true copy of the array
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState({persons: persons});
	}

	nameChnagedHandler = (event, id) => {
		// only one person will match (return true)
		const matchingPersonId = this.state.persons.findIndex(el => {
			return el.id === id
		});
		const personToChange = {
			...this.state.persons[matchingPersonId]
		};

		personToChange.name = event.target.value;

		const newPersonsArray = [...this.state.persons];
		newPersonsArray[matchingPersonId] = personToChange;

		this.setState({ persons: newPersonsArray} );
	};

	togglePersonsHandler = () => {
		const showState = this.state.personsVisibility;
		this.setState({ personsVisibility: !showState });
	};

	render() {
		let persons = null;
		let btnClasses = [classes.Button];

		if (this.state.personsVisibility) {
			persons = (
				<div>
					{this.state.persons.map((el, index) => {
						return <ErrorBoundary key={el.id}><Person
							name={el.name}
							age={el.age} 
							click={() => this.deletePersonHandler(index)} 
							changed={(event) => this.nameChnagedHandler(event, el.id)}
						/></ErrorBoundary>;
					})}
				</div>
			);
			btnClasses.push(classes.Red)
		}

		let assignedHeaderClasses = [];
		if (this.state.persons.length <= 2) {
			assignedHeaderClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedHeaderClasses.push(classes.bold);
		}

		return (
				<div className={classes.App}>
					<h1>Hi, I'm a React App</h1>
					<p className={assignedHeaderClasses.join(' ')}>This is really working!</p>
					<button className={btnClasses.join(' ')} onClick={this.togglePersonsHandler}>
						Toggle List Visibility
					</button>
					{persons}
				</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

// radium == a higher order component
export default App;
