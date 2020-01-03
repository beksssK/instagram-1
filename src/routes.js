import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./components/Containers/Login/Login";
import Direct from "./components/Direct/Direct";
import Register from "./components/Auth/Register";

const Routes = ({initialized, setInitialized}) => {
    return (
        <Switch>
            <Route exact  path='/' render={()=><Login initialized={initialized} setInitialized={setInitialized} />} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/direct' component={Direct} />
        </Switch>
    );
};

export default Routes;
