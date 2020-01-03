import React from 'react';
import './Users.css'
import {withRouter} from "react-router-dom";

const Users = (props) => {
    const {data} = props;
    return (
        <div className='user-item'>
            {data.map(user => {
                return (
                    <div key={user.id}>
                        <div  className="user" onClick={()=> props.setUserId(user.id)}>
                            <div className="users-info">
                                <div className="users-picture">
                                    <img src={user.img} alt=""/>
                                </div>
                                <div className="users-desc">
                                    <h2>{user.name}</h2>
                                    <p>{user.message}</p>
                                </div>
                            </div>
                            <div className="lastSeen">
                                <span>{user.lastSeen}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default withRouter(Users);
