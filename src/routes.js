import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Containers/Login/Login";
import Signin from "./components/Auth/Signin";
import Direct from "./components/Direct/Direct";

const Routes = ({initialized, setInitialized}) => {
    return (
        <Switch>
            <Route exact  path='/' render={()=><Login initialized={initialized} setInitialized={setInitialized} />} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/direct' component={Direct} />
        </Switch>
    );
};

export default Routes;