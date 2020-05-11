import React, { Component } from 'react';
// import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       }
// `;

class App extends Component {

  state = {
    persons: [
      { id: '123', name: 'Max', age: 28 },
      { id: '238', name: 'Manu', age: 29 },
      { id: '289', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
    console.log(persons);
    console.log(this.state.persons);
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
      ;
    }

    return (
      <Aux>
        <Cockpit
        title = {this.props.appTitle} 
        showPersons={this.state.ShowPersons} 
        persons ={this.state.persons}
        clicked = {this.togglePersonsHandler} />
        {persons} 
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
