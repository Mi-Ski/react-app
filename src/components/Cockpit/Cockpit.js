import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // useEffect takes a function that runs on every render cycle as default, unless a 2nd argument is provided
    // componentDidMount and componentDidUpdate combined to one hook
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // http request...
        setTimeout(() => {
            alert('a 100% real http request')
        }, 1000)
    }, [props.persons])

    let assignedHeaderClasses = [];
    let btnClass = '';

    if (props.personsVisibility)    { btnClass = classes.Red; }
    if (props.persons.length <= 2)  { assignedHeaderClasses.push(classes.red); }
    if (props.persons.length <= 1)  { assignedHeaderClasses.push(classes.bold); }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedHeaderClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.togglePersonsHandler}>
                Toggle List Visibility
            </button>
        </div>
    );
};

export default cockpit;