import React from 'react';
import './Users.css'
import {withRouter} from "react-router-dom";

const Users = (props) => {
    const {data} = props;


    return (
        <div className='user-item'>

            {data.map(item => {
                return (
                    <div key={item.id}>
                        <div  className="user" onClick={()=> props.setUserId(item.id)}>
                            <div className="users-info">
                                <div className="users-picture">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className="users-desc">
                                    <h2>{item.name}</h2>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                            <div className="lastSeen">
                                <span>{item.lastSeen}</span>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

export default withRouter(Users);