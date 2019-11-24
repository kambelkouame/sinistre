import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';






class confirm extends Component {
  render() {
    return(
     
     
       <React.Fragment>
        <CssBaseline />
		      <Container fixed>
                 <Paper>
				



						<Grid  xs={12} >

						<div>
						      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
						        comfirm
						      </Button>
						      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
						        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
						        <DialogContent>
						          <DialogContentText>
						            To subscribe to this website, please enter your email address here. We will send updates
						            occasionally.
						          </DialogContentText>
						          <TextField
						            autoFocus
						            margin="dense"
						            id="name"
						            label="Email Address"
						            type="email"
						            fullWidth
						          />
						        </DialogContent>
						        <DialogActions>
						          <Button onClick={handleClose} color="primary">
						            Cancel
						          </Button>
						          <Button onClick={handleClose} color="primary">
						            Subscribe
						          </Button>
						        </DialogActions>
						      </Dialog>
				    </div>
				      	



				   
		                </Grid>


                </Paper>
		      </Container>
    </React.Fragment>
       
        
    )
  }
}

export default confirm;