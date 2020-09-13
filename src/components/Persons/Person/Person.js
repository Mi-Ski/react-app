import React, { Component } from 'react';
import classes from './Person.css';

export default class Person extends Component {
    render() {
        console.log('[person.js] rendering');

        // in class based components props are accesses with "this.props" since they're properties of the class
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old. {Math.floor(Math.random() * 100)}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </div>
        );
    }
};