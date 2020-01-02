import React, {Fragment, useState} from 'react';
import './UserMessage.css';
import firebase from '../../../firebase'
const UsersMessage = (props) => {
    const [name,setName] = useState('');
    const [text,setText] = useState('');

    const add = async e => {
        e.preventDefault();
       const data =  await firebase.createMessage();
    };

    let user = props.userId ? (
        props.data.filter(u => u.id === props.userId)
    ) : null;
    return (
        <div className='UserMessage'>

            {user ? (
                <Fragment>
                    <header className='UserMessage__header'>
                        <img src={user[0].img} height='80' width='80' alt=""/>
                        <h2>{name}</h2>
                    </header>
                    <hr/>
                    <main>
                        <div className="main-chat">
                            <img src={user[0].img} height='30' width='30' alt=""/>
                            <p>{user[0].message}</p>
                        </div>

                    </main>
                    <footer>
                        <form onSubmit={add}>
                            <input type="text" onChange={(e) => setText(e.target.value)} />
                            <button>send mess</button>
                        </form>
                    </footer>
                </Fragment>

            ) : null}
        </div>
    );
};

export default UsersMessage;