import React, {Component, useEffect, useState} from 'react';
import Forms from "../../Forms/Forms";
import Content from "../../Content";
import './Login.css'
const Login = ({initialized, setInitialized}) => {

    return initialized ?
        (<Content setInitialized={setInitialized}/> ) : (
        <div className='container-fluid Login'>
            <div className="row login align-items-center'">
                <div className="col-6">
                    <div className='Login-image'>

                            <div className='slide1'></div>
                            <div className='slide2'></div>
                            <div className='slide3'></div>

                    </div>
                </div>
                <div className="col-6">
                    <Forms initialized={initialized} setInitialized={setInitialized}/>
                </div>
            </div>
        </div>
        )
};

export default Login;