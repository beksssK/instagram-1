import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import firebase from '../../firebase'
const Signin = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const login = async e => {
        e.preventDefault();
        await firebase.register(name,email, password).then(() => {
            console.log('its working')
            setRedirect(true)
        })
    };

    if(redirect) {
        return <Redirect to='/' />
    }
    return (
        <>
            <div className='Forms signin'>
                <h1>Instagram</h1>
                <div className="form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control"
                                   placeholder="Enter Name"/>

                        </div>
                        <div className="form-group">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control"
                                   placeholder="Enter email"/>

                        </div>
                        <div className="form-group">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control"
                                   placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Регистрация</button>
                    </form>
                    <div className="lines">
                        или
                    </div>
                    <div className="facebook">
                        <i className="fa fa-facebook-official" aria-hidden="true"/>

                        <a href="#qq">Войти через Facebook</a>
                    </div>
                </div>
            </div>
            <div className="formbottom formbottom-signin">
                <span>есть аккаунт?</span>
                <Link to='/'>Вход</Link>
            </div>
        </>
    );
};

export default Signin;