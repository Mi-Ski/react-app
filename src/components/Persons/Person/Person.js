import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[person.js] rendering");

    // in class based components props are accesses with "this.props" since they're properties of the class
    return (
      // react.createElement -> (type, [props], [...children])
      // can use only one type, (h1, react component or jk) 
      // Auxiliary can also be replaced with React.Fragment, which works by default
      <Auxiliary>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I'm {this.props.age} years old.{" "}
            {Math.floor(Math.random() * 100)}
          </p>
          <input
            type="text"
            onChange={this.props.changed}
            defaultValue={this.props.name}
          />
      </Auxiliary>
    );
  }
}

export default withClass(Person, classes.Person);