import React, {useState} from 'react';
import Users from "./Users/Users";
import UsersMessage from "./UsersMessage/UsersMessage";
import './Direct.css'
const data = [
    {
        img: 'https://sun9-63.userapi.com/c854128/v854128562/1c00f3/Y--KYVivkUY.jpg',
        name: 'Rodney Robinson',
        message: 'hey, dude, how are you doing?',
        id: 1,
        lastSeen: 'Tuesday'
    },
    {
        img: 'https://picsum.photos/id/237/200/300\n',
        name: 'Sexy  Sexybich',
        message: 'Babe, how about a cup of coffee?',
        id: 2,
        lastSeen: 'Wednesday'
    },
    {
        img: 'https://picsum.photos/id/238/200/300\n',
        name: 'alexa Jouly',
        message: 'Haven\' seen you for ages',
        id: 3,
        lastSeen: 'Monday'
    }
];
const Direct = () => {
    const [userId, setUserId] = useState(null);
    const [selectedChat, setSelectedChat] = useState(null);
    const [newChat, setNewChat] = useState(false);
    const [email, setEmail] = useState(null);
    const [chat, setChat] = useState([]);
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