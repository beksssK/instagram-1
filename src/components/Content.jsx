import React, {useEffect, useState} from 'react';
import firebase from '../firebase'
const Content = ({setInitialized}) => {
    const logout = e => {
        firebase.logout().then(() => {
            setInitialized(false)
        })
    };

    return (
        <div>
            Content
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Content;