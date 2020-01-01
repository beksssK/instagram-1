import React, {Fragment, useEffect, useState} from 'react';
import firebase from '../firebase'
import Toolbar from "./Toolbar/Toolbar";
const Content = ({setInitialized}) => {
    const logout = e => {
        firebase.logout().then(() => {
            setInitialized(false)
        })
    };

    return (
        <Fragment>
            <Toolbar/>
            <div className='Content container'>
                <button onClick={logout}>Logout</button>
            </div>
        </Fragment>
    );
};

export default Content;
