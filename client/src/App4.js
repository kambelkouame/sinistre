import React, { Component } from 'react';
import Main from './components/assure/main';
import "./App.css";
import "./App.scss";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Debut from './debut';
import Conn from './Conn';
import Aboutme from './components/assure/aboutme';
import { Link } from 'react-router-dom';

import LandingPage from './components/assure/landingpage';
import AboutMe from './components/assure/aboutme';
import Contact from './components/assure/contact';
import Projects from './components/assure/projects';
import Resume from './components/assure/resume';


const App =() =>(

 

    <Router>
      <Route path="/" exact component ={Conn}/>
      <Route path="/app/assure" exact component ={Debut}/>
      <Route path="/app/about" exact component ={Aboutme}/>
      <Route exact path="/app/assure1" component={LandingPage} />
	  <Route path="/app/assure/aboutme" component={AboutMe} />
	  <Route path="/app/assure/contact" component={Contact} />
	  <Route path="/app/assure/projects" component={Projects} />
	  <Route path="/app/assure/resume" component={Resume} />

    </Router>

    
  )
  
  export default App;