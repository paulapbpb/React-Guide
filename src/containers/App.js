import React, { Component } from 'react';
// import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

// const StyledButton = styled.button`
//       background-color: ${props => props.alt ? 'red' : 'green'};
//       color: white;
//       font: inherit;
//       border: 1px solid blue;
//       padding: 8px;
//       cursor: pointer;
      
//       &:hover {
//         background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//         color: black;
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

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };

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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',

    //  radium style constant 
    // ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
      <div>
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}/>
       </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red','bold']
    }


    return (
      <div className={classes.App}>
        <h1 className="Title">Name Changing App</h1>
        <p className={assignedClasses.join(' ')}>This is a paragraph</p>
        <button className={btnClass.join(' ')} 
        // style={style} 
        onClick ={this.togglePersonsHandler}>Toggle Names</button>
        {persons}

      </div>
    );
  }
}

export default App;
