import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p className={props.assignedHeaderClasses}>This is really working!</p>
            <button className={props.btnClasses} onClick={this.togglePersonsHandler}>
                Toggle List Visibility
            </button>
        </div>
    );
};

export default cockpit;