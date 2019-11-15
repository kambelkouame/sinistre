import React, { Component } from 'react';
//import React from "react";
import "./App.css";
//import "./App.scss";
//import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/assure/main';
import Index from './components/login/index';
import { Link } from 'react-router-dom';

//import { Login, Register } from "./components/login/index";



/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>

  <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/assure/resume">Resume</Link>
                <Link to="/assure/aboutme">About Me</Link>
                <Link to="/assure/projects">Projects</Link>
                <Link to="/assure/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/assure/resume">Resume</Link>
              <Link to="/assure/aboutme">About Me</Link>
              <Link to="/assure/projects">Projects</Link>
              <Link to="/assure/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>



      </div>
    );
  }
}




const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
*/

class App extends Component {

  
  render() {
  
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/assure">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/login/login">login</Link>
                <Link to="/assure/resume">Resume</Link>
                <Link to="/assure/aboutme">About Me</Link>
                <Link to="/assure/projects">Projects</Link>
                <Link to="/assure/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/assure">MyPortfolio</Link>}>
            <Navigation>
            <Link to="/login/login">login</Link>
              <Link to="/assure/resume">Resume</Link>
              <Link to="/assure/aboutme">About Me</Link>
              <Link to="/assure/projects">Projects</Link>
              <Link to="/assure/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}



export default App;
