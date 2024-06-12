import React from 'react';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons';
import "./Navbar.scss";

const NavBar = ({ onServiceClick, onContactUsClick, onAboutUsClick }) => {
    return (
        <AppBar className="navbar">
            <AppBarSection className="navbar-left">
                <img src="https://images.pexels.com/photos/6809665/pexels-photo-6809665.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Dentistolgy Logo" className="logo" />
                <h1 className="title">Dentistolgy</h1>
            </AppBarSection>

            <AppBarSpacer />

            <AppBarSection className="navbar-right">
                <Button look="flat">Home</Button>
                <Button onClick={onAboutUsClick} look="flat">About</Button>
                <Button onClick={onServiceClick} look="flat">Services</Button>
                <Button onClick={onContactUsClick} look="flat">Contact Us</Button>
            </AppBarSection>
        </AppBar>
    );
};

export default NavBar;
