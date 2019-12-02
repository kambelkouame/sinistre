import React, { Component } from 'react';
//import React from "react";
import Icon from '@material-ui/core/Icon';
import "./App.css";
import "./App.scss";
//import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/assure/main';
//import user from './user';
import { Link } from 'react-router-dom';
import Conn from './Conn';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';


import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';




const classes = makeStyles(theme => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];


 




class Utils extends Component {

 

  render() {
 


    return (

    
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/app/assure">Mon Espace Assurance</Link>} scroll>
            <Navigation>
                <Link to="/app/assure/resume">Profile Assurance</Link>
                <Link to="/app/assure/projects">Biens Assurés</Link>
                <Link to="/app/assure/aboutme">Sinistre en Cours</Link>
                <Link to="/app/assure/contact">Contact</Link>
                <IconButton  aria-label="delete">
                  Off _<PowerSettingsNewIcon/>
                </IconButton>
            </Navigation>
        </Header>
  <Drawer  title={<Link style={{textDecoration: 'none', color: 'black'}} to="/app/assure">Mon Espace</Link>}>
            <Navigation>
          
              <Link to="/app/assure/resume">Profile Assurance</Link>
               <Link to="/app/assure/projects">Biens Assurés</Link> 
              <Link to="/app/assure/aboutme">Sinistre en Cours</Link>
              <Link to="/app/assure/contact">Deconnexion</Link>
            </Navigation>
        </Drawer>

       
    </Layout>

</div>

    );
  }
}
export default Utils;
