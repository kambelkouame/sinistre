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


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';




const topBlesse = [
  { title: '1' },
  { title: '2' },
  { title: '3' },
  { title: '4' },
  { title: '+5' },
 
  ]

  const topAssurance = [
  { title: 'AXA' },
  { title: 'SAHAM' },
  { title: 'Gras Savoye' },
  { title: 'NSIA' },
  { title: 'ASSUR'},
 
  ]


 const topCommune = [
  { title: 'Abobo' },
  { title: 'yopougon' },
  { title: 'Adjame' },
  { title: 'Marcory' },
  { title: 'Treichville'},
 
  ]


 const topVille = [
  { title: 'Abidjan' },
  { title: 'Bouake' },
  { title: 'Korogho' },
  { title: 'Man' },
  { title: 'Bondoukou'},
 
  ]

  const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}



class Form2 extends Component {
  render() {
    return(
     
     
       <React.Fragment>
        <CssBaseline />
<br/><br/><br/>
		      <Container fixed>
                 <Paper>
				
             


				<Grid  xs={12} >
		      		<div >

					      <Grid container spacing={1}>
					        <Grid item xs={12}>
						         

					        </Grid>
					        <Grid item xs={6}>
                           			<div style={{ width: 500 }}>
                           			<h5>Nombre de personne blessé</h5>
								      <Autocomplete
								        multiple
								        id="tags-outlined"
								        options={topBlesse}
								        getOptionLabel={option => option.title}
								        filterSelectedOptions
								        renderInput={params => (
								          <TextField
								            {...params}
								            variant="outlined"
								            label="Selectionner"
								            placeholder="Selectionner votre sinistre"
								            margin="50px"
								            fullWidth
								          />
								        )}
								      />
                                 </div>

					          
					        </Grid>
					        <Grid item xs={6}>
					       <div style={{ width: 500 }}>
                           			<h5>Votre Assurance</h5>
								      <Autocomplete
								        multiple
								        id="tags-outlined"
								        options={topAssurance}
								        getOptionLabel={option => option.title}
								        filterSelectedOptions
								        renderInput={params => (
								          <TextField
								            {...params}
								            variant="outlined"
								            label="Selection Multiple"
								            placeholder="Selectionner votre Assurance"
								            margin="normal"
								            fullWidth
								          />
								        )}
								      />
                                 </div>
					          
								      
					        </Grid>
					      

					         <Grid item xs={6}>
				
						     <div style={{ width: 500 }}>
						    <h5> Ville du Sinistre</h5>
						       
						        <Autocomplete
								        multiple
								        id="tags-outlined"
								        options={topVille}
								        getOptionLabel={option => option.title}
								        filterSelectedOptions
								        renderInput={params => (
								          <TextField
								            {...params}
								            variant="outlined"
								            label="Selection Multiple"
								            placeholder="Selectionner la Ville"
								            margin="normal"
								            fullWidth
								          />
								        )}
								      />

						      </div>
                        
					        </Grid>

					         <Grid item xs={6}>
				
						     <div style={{ width: 500 }}>
						    <h5> Commune du Sinitre</h5>
						       
						        <Autocomplete
								        multiple
								        id="tags-outlined"
								        options={topCommune}
								        getOptionLabel={option => option.title}
								        filterSelectedOptions
								        renderInput={params => (
								          <TextField
								            {...params}
								            variant="outlined"
								            label="Selection Multiple"
								            placeholder="Selectionner la Commune"
								            margin="normal"
								            fullWidth
								          />
								        )}
								      />

						      </div>
                        
					        </Grid>


					        <Grid item xs={3}>
				
						     <div style={{ width: 500 }}>
						     <h5>Importer les Images</h5>

						        
						    <label htmlFor="contained-button-file">
						        <Button variant="contained" component="span" >
						          Images

						      <input
						        id="contained-button-file"
						        multiple
						        type="file"
						      />
						        </Button>
						      </label>

						      </div>

						      </Grid>

                               <Grid item xs={3}>
  
						        <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="Immatriculation"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>

                            </Grid>
                              <Grid item xs={3}>

						        <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="Immatriculation"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
					        </Grid>

					         <Grid item xs={3}>

						        <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="Immatriculation"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
					        </Grid>


					             <Grid item xs={3}>
				
						     <div style={{ width: 500 }}>
						     <h5>Date du sinistre</h5>
						        <TextField
									    id="date"
									    label="Birthday"
									    type="date"
									    defaultValue="2017-05-24"
									    
									  />
						      </div>

						      </Grid>

                               <Grid item xs={3}>
  
						        <div style={{ width: 500 }}>
						     <h5>Heure du Sinistre</h5>
						        <TextField
								    id="time"
								    label="Alarm clock"
								    type="time"
								    defaultValue="07:30"
								   
								    
								  />
						      </div>

                            </Grid>
                              <Grid item xs={3}>

						        <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="Immatriculation"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
					        </Grid>

					         <Grid item xs={3}>

						        <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="Immatriculation"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
					        </Grid>

                     
					        <Grid item xs={3}>

					        <div>
						      <Button variant="outlined" color="primary">
						        comfirm
						      </Button>
						      <Dialog aria-labelledby="form-dialog-title">
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
						          <Button color="primary">
						            Cancel
						          </Button>
						          <Button  color="primary">
						            Subscribe
						          </Button>
						        </DialogActions>
						      </Dialog>
				    </div>
					         
					       </Grid>
						        <Grid item xs={3}>
						        
						        </Grid>
						        <Grid item xs={3}>
						          
						        </Grid>
					      </Grid>









  					  </div>

                </Grid>


                </Paper>
		      </Container>
    </React.Fragment>
       
        
    )
  }
}

export default Form2;