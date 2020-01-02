import React, {Fragment} from 'react';
import './UserMessage.css';

const UsersMessage = (props) => {

    let user = props.userId ? (
        props.data.filter(u => u.id === props.userId)
    ) : null;
    console.log(user);
    return (
        <div className='UserMessage'>


            {user ? (
                <Fragment>
                    <header className='UserMessage__header'>
                        <img src={user[0].img} height='80' width='80' alt=""/>
                        <h2>{user[0].name}</h2>
                    </header>
                    <hr/>
                    <main>
                        <div className="main-chat">
                            <img src={user[0].img} height='30' width='30' alt=""/>
                            <p>{user[0].message}</p>
                        </div>

                    </main>
                </Fragment>

            ) : null}
        </div>
    );
};

export default UsersMessage;