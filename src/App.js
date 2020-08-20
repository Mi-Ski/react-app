import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js'

const App = (props) => {
  // useState hook returns an array with 2 elements, destructuring
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Michal", age: 20 },
      { name: "Piotr", age: 16 },
      { name: "Pingu", age: 3 }
    ],
    otherState: 'please don\'t change this, React'
  });
  console.log(personsState);
  
  const switchNameHandler = () => {
    // wrong: personsState.persons[1].name = 'aaa'
    setPersonsState({
      persons: [
        { name: "Mi-Ski", age: 20 },
        { name: "Piotr", age: 17 },
        { name: "Pin", age: 4 }
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React Component</h1>
      <button onClick={switchNameHandler}>Switch name!</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobbies: drawing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: making $$$</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  );
  // WILL GET COMPILED TO:
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This should work now'))
}

export default App;