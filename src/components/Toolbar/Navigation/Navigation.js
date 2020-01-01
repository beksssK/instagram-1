import React from 'react';
import {NavLink} from "react-router-dom";
import './Navigation.css';

const Navigation = () => {
    return (
        <nav className='Navigation'>
            <NavLink className='NavLink' to='/find'><i className="far fa-compass"/></NavLink>
            <NavLink className='NavLink' to='/likes'><i className="far fa-heart"/></NavLink>
            <NavLink className='NavLink' to='/profile'><i className="far fa-user"/></NavLink>
        </nav>
    );
};

export default Navigation;
