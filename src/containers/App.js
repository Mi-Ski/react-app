import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.css";

class App extends Component {
  constructor(props) {
	  console.log("[app.js] constructor");
	  super(props);
	  
	  this.state = {
		  persons: [
			  { id: "sdff", name: "Max", age: 28 },
			  { id: "dfsd", name: "Manu", age: 29 },
			  { id: "34l", name: "Stephanie", age: 26 },
			],
			personsVisibility: false,
    };
  };

  static getDerivedStateFromProps(props, state){
	console.log('[app.js] getDerivedStateFromProps');
	return state;
  };

  componentDidMount(){
	console.log('[app.js] componentdidmount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    return true;
    console.log('[app.js] shouldComponentUpdate');
  }

  getSnapshotBeforeUpdate() {
    return "haha";
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('[app.js] componentDidUpdate   ' + snapshot);
  }

  deletePersonHandler = (index) => {
    // slice without arguments just returns a true copy of the array
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChnagedHandler = (event, id) => {
    // only one person will match (return true)
    const matchingPersonId = this.state.persons.findIndex((el) => {
      return el.id === id;
    });
    const personToChange = {
      ...this.state.persons[matchingPersonId],
    };

    personToChange.name = event.target.value;

    const newPersonsArray = [...this.state.persons];
    newPersonsArray[matchingPersonId] = personToChange;

    this.setState({ persons: newPersonsArray });
  };

  togglePersonsHandler = () => {
    const showState = this.state.personsVisibility;
    this.setState({ personsVisibility: !showState });
  };

  //! ////////////////////////////////////
  //!              Render               //
  //! ////////////////////////////////////

  render() {
	console.log('[app.js] render');
    let personsToRender = null;

    if (this.state.personsVisibility) {
      personsToRender = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChnagedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          btnClasses={classes.Button}
          togglePersonsHandler={this.togglePersonsHandler}
          personsVisibility={this.state.personsVisibility}
          persons={this.state.persons}
        ></Cockpit>
        {personsToRender}
      </div>
    );
  }
}

// radium == a higher order component
export default App;
