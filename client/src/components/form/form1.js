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

import Form2 from './../form/form2';



const topSinistres = [
  { title: 'Vole' },
  { title: 'Bris de glace' },
  { title: 'Vol d/Accessoires' },
  { title: 'Sinistres corporels' },
  { title: 'Recours' },
 
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

class Form1 extends Component {
  render() {
    return(
      <div >
       

       <React.Fragment>
        <CssBaseline />
		      <Container fixed>
                 <Paper>

                 <Grid  xs={12} >
		      		<div >

					      <Grid container spacing={3}>
					        <Grid item xs={12}>
						         

					        </Grid>
					        <Grid item xs={6}>
                           			<div style={{ width: 500 }}>
                           			<h5>Type de sinitre</h5>
								      <Autocomplete
								        multiple
								        id="tags-outlined"
								        options={topSinistres}
								        getOptionLabel={option => option.title}
								        filterSelectedOptions
								        renderInput={params => (
								          <TextField
								            {...params}
								            variant="outlined"
								            label="Selection Multiple"
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


					          <Grid item xs={12}>
				
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

					        <Button variant="contained" color="secondary">
						        Next
						     </Button>
					         
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
       
        </div>
    )
  }
}

export default Form1;