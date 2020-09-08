import React from 'react';
import classes from './Person.css';

const person = (props) => {
// let random = Math.random();
// if (random > 0.7) {
    //     throw new Error ('a terrible failure occured!')
    // }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old. {Math.floor(Math.random() * 100)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}
export default person;