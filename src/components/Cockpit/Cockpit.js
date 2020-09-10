import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let assignedHeaderClasses = [];
    let btnClass = '';
    if (props.personsVisibility) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedHeaderClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedHeaderClasses.push(classes.bold);
    }

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