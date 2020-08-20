import React from 'react';

const person = (props) => {
    // using the special children property of props
    return (
        <div>
            <p>I'm {props.name} and I'm {props.age} years old. {Math.floor(Math.random() * 100)}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;