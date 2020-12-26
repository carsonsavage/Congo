import React from 'react';
import './header.css';

function Header(props){
    return (
        <>
        {props.type === "checkout" ? 
        <div className="header">
            <h4>Checkout Header</h4>
        </div>
        :
        <div className="header">
            <h4>Header</h4>
        </div>
        }
        </>
        
    )
};

export default Header;