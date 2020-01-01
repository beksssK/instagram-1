import React, {Component, useEffect, useState} from 'react';
import Forms from "../../Forms/Forms";
import Content from "../../Content";

const Login = ({initialized, setInitialized}) => {
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

    }, [index])
   const change = () => {
        if(index < 3){
            setIndex(index + 1)
        } else {
           setIndex(0)
        }
    };
    return initialized ?
        (<Content setInitialized={setInitialized}/> ) : (
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
                    <Forms initialized={initialized} setInitialized={setInitialized}/>
                </div>
            </div>
        </div>
        )
};

export default Login;