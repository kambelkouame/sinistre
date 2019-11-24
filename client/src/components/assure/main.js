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



const Main = () => (
  <Switch>
   
    <Route exact path="/app/assure" component={LandingPage} />
    <Route path="/app/assure/aboutme" component={AboutMe} />
    <Route path="/app/assure/contact" component={Contact} />
    <Route path="/app/assure/projects" component={Projects} />
    <Route path="/app/assure/resume" component={Resume} />
    <Route exact path="/app/assure/process" component={Form} />
    <Route exact path="/app/assure/process!" component={Form2} />
    <Route path="/" component={Conn} />
   
  </Switch>
)

export default Main;
