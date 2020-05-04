import React from 'react';

const inputstyle = {
    margin: '20px'
  };

const userinput = (props) => {
    return (
    <div >
        <input style={inputstyle} type="text" onChange={props.changed}/>
    </div>
    )
};

export default userinput;