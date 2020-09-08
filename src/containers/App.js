import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

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

	//! ////////////////////////////////////
	//!              Render               //
	//! ////////////////////////////////////

	render() {
		let personsToRender = null;
		let btnClasses = [classes.Button];

		if (this.state.personsVisibility) {
			personsToRender = (
				<Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChnagedHandler} 
			/> )	
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
					{personsToRender}
				</div>
		);
	}
}

// radium == a higher order component
export default App;
