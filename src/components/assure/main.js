import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/assure" component={LandingPage} />
    <Route path="/assure/aboutme" component={AboutMe} />
    <Route path="/assure/contact" component={Contact} />
    <Route path="/assure/projects" component={Projects} />
    <Route path="/assure/resume" component={Resume} />
  </Switch>
)

export default Main;
