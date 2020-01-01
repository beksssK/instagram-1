import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Containers/Login/Login";
import Signin from "./components/Auth/Signin";

const Routes = ({initialized, setInitialized}) => {
    return (
        <Switch>
            <Route exact  path='/' render={()=><Login initialized={initialized} setInitialized={setInitialized} />} />
            <Route exact path='/signin' component={Signin} />
        </Switch>
    );
};

export default Routes;
