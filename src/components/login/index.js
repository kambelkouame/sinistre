import "./style.scss";
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Register from './register';


const Index = () => (
  <Switch>
    <Route exact path="/login/login" component={Login} />
    <Route path="/login/register" component={Register} /> 
  </Switch>
)

/*export { Login } from "./login";
export { Register } from "./register";*/

export default Index;
