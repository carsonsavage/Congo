import React from 'react';
import { Card } from "react-bootstrap";
import BootstrapBtn from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const CardExample = () => {
return (
    <Card className="text-center">
    <Card.Body className='card-image'
        style = {
            {
                backgroundImage: "url('https://i.imgur.com/f4W2cLs.png')"
            }
        } >
    <Card.Title style = {
        {
            color: 'white'
        }
    }><b><em>Ready to get started?</em></b></Card.Title>
    < Card.Text 
    style = {
        {
            color: 'white'
        }
    }
    className = "mb-2" >
        Sign up here!
    </Card.Text>
    <Link to="/signup" className='react-link'>
    <BootstrapBtn block size="lg" type="submit" id="signup-btn" variant="success">
        <i className="signup icon" />
    Sign up
    </BootstrapBtn>
    </Link>
</Card.Body>
</Card>
)
}

export default CardExample;