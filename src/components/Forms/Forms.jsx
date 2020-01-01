import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import firebase from '../../firebase'
import Preloader from "../Preloader/Preloader";
import './Forms.css';

const Forms = ({initialized, setInitialized}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [preloader, setPreloader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showText, setShowText] = useState(false);
    const [message, setMessage] = useState(null);
    const login = e => {
        e.preventDefault()
        if (!preloader) {
            setPreloader(!preloader)
            setTimeout(() => {
                setPreloader(false)
            }, 1000)
        } else {
            setPreloader(false)
        }
        firebase.login(email, password).then((user) => {

            if (user) {
                setInitialized(user)
            } else {
                setMessage('Введенное вами имя пользователя не принадлежит аккаунту. Проверьте свое имя пользователя и повторите попытку.')
            }
        }).catch(err => {
            console.log(err)
        })
    };
    const validate = password.length == '' ? true : false || password.length <= 5 ? true : false || email.length == '' ? true : false;
    useEffect(() => {
        setInitialized(false)
    }, [])
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
                        <div className="form-group wrap-password">
                            <span style={{display: showPassword ? 'block' : 'none'}} className='password-show'
                                  onClick={() => setShowText(!showText)}>{showText ? 'скрыть' : 'показать'}</span>
                            <input value={password} type={showText ? 'text' : 'password'}
                                   onChange={(e) => {
                                       setPassword(e.target.value)
                                       if (e.target.value >= 1) {
                                           setShowPassword(true)
                                           return;
                                       } else {
                                           setShowPassword(false)
                                       }

                                   }}
                                   className="form-control"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 custom-button"
                                disabled={validate}>{preloader ? <Preloader/> : 'Войти'}</button>
                        <span className='message'>{message}</span>
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