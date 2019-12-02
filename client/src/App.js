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




import Form from './components/assure/form';
import Form2 from './components/form/form2';
import Checkout from './components/form/Checkout';
import Dashboard from './components/assurance/Dashboard.js';
import Auto from './components/assurance/auto';
import Ordres from './components/ordres/Ordres'


 
class App extends Component {


   constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
}

callAPI() {

  /*  const data=new URLSearchParams();
    for(const pair of new FormData(document.getElementById("form"))){

      data.append(pair[0],pair[1])
    }
    fetch("http://localhost:9000/process" ,{ 
      method: "post",
      body: {
        type_sinsitre:"azee",
        ville:"ville",
        assurance:"assurance",
        commune:"commune",
        immatriculation:56868686,
   }
})
        .then(res => res.json())
        .then(res => this.setState({ apiResponse: res }));*/
}

componentWillMount() {
    this.callAPI();
}



  render() {
    return(


    <Router>
      <Route path="/" exact component ={Conn}/>
      <Route path="/app/assure" exact component ={Debut}/>
      <Route path="/app/assure/resume" component={Resume} />
      <Route path="/app/assure/aboutme" component={AboutMe} />
      <Route path="/app/assure/contact" component={Contact} />
      <Route path="/app/assure/projects" component={Projects} />
      <Route exact path="/app/assure/process" component={Form} />
      <Route exact path="/app/assure/process!" component={Form2} />
      <Route exact path="/app/assure/Step" component={Checkout} />
      <Route exact path="/app/assurance/Dashboard" component={Dashboard}/>
      <Route exact path="/app/assurance/Auto" component={Auto}/>
      <Route exact path="/app/ordres/Ordres" component={Ordres}/>

    
    

    </Router>

    
  )
  }
}

export default App;