import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import firebase from '../../firebase'
const Forms = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const login = async e => {
        e.preventDefault();
        await firebase.login(email, password).then(() => {
            setRedirect(true)
        })
    };
    if(redirect) {
        return <Redirect to='/content' />
    }
    return (
        <>
            <div className='Forms'>
                <h1>Instagram</h1>
                <div className="form">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control"
                                   placeholder="Enter email"/>

                        </div>
                        <div className="form-group">
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control"
                                   placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Войти</button>
                    </form>
                    <div className="lines">
                        или
                    </div>
                    <div className="facebook">
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <a href="#">Войти через Facebook</a>
                    </div>
                    <div className="forgot-password">
                        <Link to='/reset'>Забыли пароль?</Link>
                    </div>

                </div>
            </div>
            <div className="formbottom">
                <span>У вас ещё нет аккаунта?</span>
                <Link to='/signin'>Зарегистрироваться</Link>
            </div>
        </>
    );
};

export default Forms;