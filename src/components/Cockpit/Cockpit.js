import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = ' '; 
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <=2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red','bold']
    }

    return (
        <div className={classes.Cockpit}>
        <h1 className="Title">{props.title}</h1>
        <p className={assignedClasses.join( ' ' )}>This is a paragraph</p>
        <button 
        className={btnClass} 
        onClick ={props.clicked}>Toggle Names</button>
        </div>
    );
};

export default cockpit;