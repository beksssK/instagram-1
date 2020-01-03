import React, {useEffect, useState} from 'react';
import Users from "./Users/Users";
import UsersMessage from "./UsersMessage/UsersMessage";
import './Direct.css'
import firebase from "../../firebase";

const Direct = () => {
    const [userId, setUserId] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [newChat, setNewChat] = useState(false);
    const [email, setEmail] = useState(null);
    const [chat, setChat] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        firebase.getUsers().onSnapshot( snapshot => {
            const users = [];
            snapshot.docChanges().forEach(async change => {
                const data = change.doc.data();
                await users.push(data);
            });
            setData(users);
        })
    }, []);
    console.log(data);
    return (
        <div className='direct'>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-4 offset-2 users">
                       <div className="user-header">
                           <h3>Main</h3>
                           <div className="icons">
                               <i className='fa fa-search' />
                               <i className='fa fa-users' />
                           </div>
                       </div>
                       <hr/>
                       <Users setUserId={setUserId} data={data} />
                   </div>
                 <div className="col-6 UserMessage-padding">
                     <UsersMessage userId={userId} data={data} />
                 </div>
               </div>
           </div>
        </div>
    );
};

export default Direct;
