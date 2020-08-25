import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import "./Person/Person.css";

class App extends Component {
	state = {
		persons: [
			{ id: 'sdff', name: "Max", age: 28 },
			{ id: 'dfsd', name: "Manu", age: 29 },
			{ id: '34l', name: "Stephanie", age: 26 },
		],
		otherState: "some other value",
		personsVisibility: false,
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
			backgroundColor: "rgb(255, 65, 65)",
			font: "inherit",
			border: "1px solid white",
			borderRadius: "999vw",
			padding: "8px",
			color: "white",
			cursor: "pointer",
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
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={myStyle} onClick={this.togglePersonsHandler}>
					Toggle List Visibility
				</button>
				{persons}
			</div>
		);
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App;
