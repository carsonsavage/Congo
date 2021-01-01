import React from 'react';

function Wrapper(props){
    return (
        <div className="ui container">
            {props.children}
        </div>
    )
};

export default Wrapper;