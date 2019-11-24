import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import image from '../../img.png'

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
   
    margin: 60,
    width: 60,
    height:60,
  },
});


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          

          
           <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar}/>

            <div className="banner-text">
              
              <h1>Mon espace Assurance</h1>
              

            <hr/>

          <p>AUTOMOBILE | HABITATION | SANTE | VOYAGE </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
