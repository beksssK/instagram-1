import React from 'react';
import './Toolbar.css';
import Search from "./Search/Search";
import Navigation from "./Navigation/Navigation";
const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <div className='row'>
                <div className='col-3 BarFirst'>
                    <i className="fab fa-instagram"/>
                    <div className='BarLogo'/>
                </div>
                <div className='col-6'>
                    <Search/>
                </div>
                <div className='col-3'>
                    <Navigation/>
                </div>
            </div>

        </header>
    );
};

export default Toolbar;
