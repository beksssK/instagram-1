import React from 'react';
import Forms from "../../Forms/Forms";
import Content from "../../Content";
import './Login.css'
import Preloader from "../../Preloader/Preloader";
const Login = ({initialized, setInitialized}) => {

    return initialized ?
        (<Content setInitialized={setInitialized}/> ) : (
        <div className='container-fluid Login'>
            <div className="row login align-items-center'">
                <div className="col-6">
                    <div className='Login-image'>
                            <div className='slide1'/>
                            <div className='slide2'/>
                            <div className='slide3'/>
                    </div>
                </div>
                <div className="col-6">
                    {initialized ? <Preloader/> : <Forms initialized={initialized} setInitialized={setInitialized}/>}
                </div>
            </div>
        </div>
        )
};

export default Login;
