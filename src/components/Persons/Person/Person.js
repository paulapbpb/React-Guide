import React from 'react';
// import Radium from 'radium';
import './Person.css';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';



const person = (props) => {

    return (
    <Aux>
    <div className={classes.Person}>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p>{props.children}</p>
    <input type="text" onChange = {props.changed} value={props.name}/>
    </div>
    </Aux>
    )
};

export default person;