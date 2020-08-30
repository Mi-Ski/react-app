import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    // using the special children property of props
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. {Math.floor(Math.random() * 100)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}
export default Radium(person);