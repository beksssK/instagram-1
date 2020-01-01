import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Containers/Login/Login";
import Signin from "./components/Auth/Signin";
import Content from "./components/Content";

const Routes = () => {
    return (
        <Switch>
            <Route exact  path='/' component={Login} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/content' component={Content} />
        </Switch>
    );
};

export default Routes;