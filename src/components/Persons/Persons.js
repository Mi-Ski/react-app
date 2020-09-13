import React, { Component} from 'react';
import Person from './Person/Person'

export default class Persons extends Component {
   static getDerivedStateFromProps (props, state) {
      console.log('[persons.js] getDerivedStateFromProps');
      return state;
   }

   shouldComponentUpdate (nextProps, nextState) {
      // returns a boolean
      console.log('[persons.js] shouldComponentUpdate');
      return true;
   }

   getSnapshotBeforeUpdate (perviousProps, previousState) {
      console.log('[persons.js] getSnapshotBeforeUpdate');
   }

   componentDidUpdate () {
      console.log('[persons.js] componentDidUpdate');
   }

   render () {
      console.log('[persons.js] rendering...');
      return this.props.persons.map( (el, index) => {
         return <Person
               name = {el.name}
               key = {el.id}
               age={el.age}
               click = {() => this.props.clicked(index)}
               changed = {(event) => this.props.changed(event, el.id)}
               />
      });
   }
}
