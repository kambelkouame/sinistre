import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';


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




export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations Personnelles
      </Typography>
    

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="nom"
            label="nom"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
      

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="prenom"
            label="prenom"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
       
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="addresse_sinistre"
            label="Adresses du sinistres"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
      

        <Grid item xs={12}>
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
                            name ="sinistre"
                            label="Selectionner votre sinistre"
                            placeholder="Selectionner votre sinistre"
                            margin="normal"
                            fullWidth
                          />
                        )}
                      />
              
        </Grid><br/>
      

       <Grid item xs={12} sm={6}>
          
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
                      name ="ville"
                      label="Selectionner votre ville"
                      placeholder="Selectionner la Ville"
                      margin="normal"
                      fullWidth
                    />
                  )}
                />

          
        </Grid>
       <br/>
       
        <Grid item xs={12} sm={6}>
          
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
                    name="assurance"
                    label="Selectionner votre Assurance"
                    placeholder="Selectionner votre Assurance"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
        
        </Grid><br/>
     
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pays"
            name="pays"
            label="pays "
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
      
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Avez vous Besoins d'un constat de police?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}