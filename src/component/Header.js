import React from 'react';
import { Button, Navbar } from 'react-bootstrap'
import logo from '../logo.svg';

const Header = (props) => {
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
export default Header;