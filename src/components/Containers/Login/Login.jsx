import React, {Component, useEffect, useState} from 'react';
import Forms from "../../Forms/Forms";

const baseImageUrl = 'https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png';

// class Login extends Component {
//     state = {
//         img: ['https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg',
//             'https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg',
//             'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg',
//             'https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg'
//         ],
//         index: 0,
//     };
//     change = () => {
//         if(this.state.index < 3){
//             this.setState({index: this.state.index + 1})
//         } else {
//             this.setState({index: 0});
//         }
//     };
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         setTimeout(() => {
//             this.change();
//         }, 2000)
//     }
//     componentDidMount() {
//         this.change();
//     }
//
//     render() {
//         return (
//             <div className='container-fluid Login'>
//                 <div className="row login align-items-center'">
//                     <div className="col-6">
//                         <div className='Login-image'>
//                             <div className="images">
//                                 {this.state.img.map((i, index) => {
//                                     if(index === this.state.index){
//                                         return <img alt="" key={index} src={i} style={{
//                                             visibility: 'visible',
//                                             opacity: '1',
//                                             transitionDuration: '3s',
//                                         }}/>
//                                     } else {
//                                         return <img key={index} src={i} alt=""/>
//                                     }
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         forms
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Login;

const Login = () => {
    const img = ['https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg',
        'https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg'
    ];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            change();
        }, 2000)

    })
   const change = () => {
        if(index < 3){
            setIndex(index + 1)
        } else {
           setIndex(0)
        }
    };
    return (
            <div className='container-fluid Login'>
                <div className="row login align-items-center'">
                    <div className="col-6">
                        <div className='Login-image'>
                            <div className="images">
                                {img.map((i, indexs) => {
                                    if(index === indexs){
                                        return <img alt="" key={indexs} src={i} style={{
                                            visibility: 'visible',
                                            opacity: '1',
                                            transitionDuration: '3s',
                                        }}/>
                                    } else {
                                        return <img key={indexs} src={i} alt=""/>
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <Forms />
                    </div>
                </div>
            </div>
        );
};

export default Login;