import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Form from './form';
import Conn from './../../Conn';
import Form2 from './../form/form2';
import Checkout from './../form/Checkout';
import Dashboard from './../assurance/Dashboard.js';
import Auto from './../assurance/auto';
import Ordres from './../ordres/Ordres';




const Main = () => (
  <Switch>
   
    <Route exact path="/app/assure" component={LandingPage} />
    <Route path="/app/assure/aboutme" component={AboutMe} />
    <Route path="/app/assure/contact" component={Contact} />
    <Route path="/app/assure/projects" component={Projects} />
    <Route exact path="/app/assure/process" component={Form} />
    <Route exact path="/app/assure/process!" component={Form2} />
      <Route exact path="/app/assure/Step" component={Checkout} />
      <Route exact path="/app/assurance/Dashboard" component={Dashboard}/>
      <Route exact path="/app/assurance/Auto" component={Auto}/>
     <Route exact path="/app/ordres/Ordres" component={Ordres}/>
    <Route path="/" component={Conn} />
   
  </Switch>
)

export default Main;
