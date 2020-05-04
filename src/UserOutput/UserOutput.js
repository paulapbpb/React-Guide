import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return (
    <div className="UserOutput" >
        <p>My username is {props.username}</p>
    </div>
    )
};

export default useroutput;