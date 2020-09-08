import React from 'react';
import Person from './Person/Person'

const persons = (props) => 
   props.persons.map( (el, index) => {
		return <Person
            name = {el.name}
            key = {el.id}
            age={el.age}
				click = {() => props.clicked(index)}
				changed = {(event) => props.changed(event, el.id)}
				/>
   });

export default persons;
