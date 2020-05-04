import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    usernames: [
      {username: 'Scarlette'},
      {username: 'Brooklyn'},
      {username: 'Paula'}
    ],
    showPersons: false
  };

  // switchUsernameHandler = (newUsername) => {
  //   this.setState({
  //     usernames: [
  //       { username: 'scarlettelesma'},
  //       { username: 'brooklynrg'},
  //       { username: 'paulapbpb' }
  //     ]
  //   });
  // };

  // usernameChangedHandler = (event) => {
  //   this.setState( {
  //     usernames: [
  //       { username: event.target.value },
  //       { username: 'brooklynrg' },
  //       { username: 'paulapbpb' }
  //     ]
  //   })
  // }


  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      // backgroundColor: 'white',
      // font: 'inherit',
      // border: '1px solid',
      // padding: '8px',
      // cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
      <div>
        {this.state.persons.map(person => {
          return <Person 
          name={person.name} 
          age={person.age} />
        })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Max!')} changed={this.nameChangedHandler} >My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
       </div>
      );
    }

    return (
      <div className="App">
        <h1 className="Title">Name Changing App</h1>
        <button style={style} 
        onClick ={this.togglePersonsHandler}>Toggle Names</button>
        {persons}

        {/* <button style={style} onClick={() => this.switchUsernameHandler()}>Switch To Usernames</button> */}
        {/* <UserInput change={this.switchUsernameHandler.bind(this, 'hello')}/> */}

        {/* <row>
        <UserInput changed={this.usernameChangedHandler}/>
        <UserOutput username={this.state.usernames[0].username}/>
        <UserOutput username= {this.state.usernames[1].username}/>
        <UserOutput username={this.state.usernames[2].username}/>
        </row> */}



      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
