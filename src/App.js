import React, { Component } from "react";
import styled from 'styled-components';
import Person from "./Person/Person";
import "./App.css";
import "./Person/Person.css";

const StyledButton = styled.button`
			background-color: ${props => props.colChange ? 'red' : 'green'};
			font: inherit;
			border: 1px solid white;
			border-radius: 999vw;
			padding: 8px;
			color: white;
			cursor: pointer;

			&:hover {
				background-color: ${props => props.colChange ? 'orange' : 'limegreen'};
				color: black;
			}
`

class App extends Component {
	state = {
		persons: [
			{ id: 'sdff', name: "Max", age: 28 },
			{ id: 'dfsd', name: "Manu", age: 29 },
			{ id: '34l', name: "Stephanie", age: 26 },
		],
		otherState: "some other value",
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
		const myStyle = {
				backgroundColor: "green",
				font: "inherit",
				border: "1px solid white",
				borderRadius: "999vw",
				padding: "8px",
				color: "white",
				cursor: "pointer",
				':hover': {
					backgroundColor: 'limegreen',
					color: 'black'
				}
		};

		let persons = null;
		if (this.state.personsVisibility) {
			persons = (
				<div>
					{this.state.persons.map((el, index) => {
						return <Person
							key={el.id}
							name={el.name}
							age={el.age} 
							click={() => this.deletePersonHandler(index)} 
							changed={(event) => this.nameChnagedHandler(event, el.id)}
						/>;
					})}
				</div>
			);
			myStyle.backgroundColor = 'crimson';
			myStyle[':hover'] = {
				backgroundColor: 'orange',
				color: 'black'
			}
		}

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
				<div className="App">
					<h1>Hi, I'm a React App</h1>
					<p className={classes.join(' ')}>This is really working!</p>
					<StyledButton colChange={this.state.personsVisibility} onClick={this.togglePersonsHandler}>
						Toggle List Visibility
					</StyledButton>
					{persons}
				</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

// radium == a higher order component
export default App;
