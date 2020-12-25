import React from 'react';

function UserDashboard(props){
    return <h2>User: {props.match.params.id} Dashboard</h2>
};

export default UserDashboard;