import React from 'react';
import './account-info.css';

function AccountInfo(props){
    return (
        <div className="account-info">
            <h3>Account Info</h3>
            <h5>User id: {props.id}</h5>
        </div>
    )
};

export default AccountInfo;