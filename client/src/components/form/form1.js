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

  const topSinistres1 = [
  { value: 'Vol' , label : "vol"},
  { value: 'Bris de glace' , label : "bris de glace"},
  { value: 'Vol d/Accessoires' , label : "vol 2"},
  { value: 'Sinistres corporels' , label : "sinistres"},
  { value: 'Recours' , label : "recours"},
 
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
<br/><br/><br/>
       

       <React.Fragment>
        <CssBaseline />
		      <Container fixed>
                 <Paper>
         <form method="POST" action="http://localhost:9000/process" id="form">
                 <Grid  xs={12} >
		      		<div >

					      <Grid container spacing={3}>
					        <Grid item xs={12}>
						         

					        </Grid>
					        <Grid item xs={6}>
                           		  <div style={{ width: 500 }}>
						     <h5>sinistre</h5>
						        <TextField
						          id="outlined-basic"
						          label="type de sinistre"
						          name="type_sinistre"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        

					          
					        </Grid>
					        <Grid item xs={6}>
					        <div style={{ width: 500 }}>
						     <h5>ville</h5>
						        <TextField
						          id="outlined-basic"
						          label="ville"
						          name="ville"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
								      
					        </Grid>
					      

					         <Grid item xs={6}>
				
						      <div style={{ width: 500 }}>
						     <h5>assurance</h5>
						        <TextField
						          id="outlined-basic"
						          label="assurance"
						          name="assurance"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
                        
					        </Grid>

					         <Grid item xs={6}>
				
						      <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="commune"
						          name="commune"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
					        </Grid>


					          <Grid item xs={12}>
				
						     <div style={{ width: 500 }}>
						     <h5>Votre Immatriculation</h5>
						        <TextField
						          id="outlined-basic"
						          label="Immatriculation"
						          name="immatriculation"
						          margin="normal"
						          variant="outlined"
						        />
						      </div>
                        
					        </Grid>


					        <Grid item xs={3}>

					        <Button variant="contained"  type="submit" color="secondary">
						        soumettre
						     </Button>
					         
					        </Grid>
					        <Grid item xs={3}>
					        
					        </Grid>
					        <Grid item xs={3}>
					          
					        </Grid>
					      </Grid>
  					  </div>

		   
                </Grid>
</form>
                </Paper>
		      </Container>
    </React.Fragment>
       
        </div>
    )
  }
}

export default Form1;