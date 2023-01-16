import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Checkbox from '@mui/material/Checkbox';

export default function OpenAccount() {
    const [value, setValue] = React.useState(new Date().toLocaleDateString());


    return (
        <>
            <Grid container direction="column" spacing={2}>
                <Typography gutterBottom variant="h5" component="h1" className='title_card_login'>
                    Formulaire de pré-ouverture de compte  <span>MyCDM,</span> </Typography>
                <Typography gutterBottom variant="p" component="p" className='description_card_login'>
                    Renseignez vos informations afin d’initier votre demande en ligne</Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        placeholder="Inscrivez votre Prénom"
                        fullWidth
                        autoComplete="given-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>

                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Nom"
                        placeholder="Inscrivez votre Nom de famille"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="e-mail"
                        name="e-mail"
                        label="Email"
                        placeholder="Inscrivez votre e-mail"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="Date"
                        type="date"
                        name="Date"
                        label="Date de naissance"
                        placeholder=""
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"
                        // value={value}
                        onChange={(newValue) => {
                            setValue(newValue.timeStamp);
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="CIN"
                        name="CIN"
                        label="CIN"
                        placeholder="CIN"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="numero"
                        name="numero"
                        label="Numéro de téléphone"
                        fullWidth
                        autoComplete="Telephone number"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        required
                        control={<Checkbox color="error" name="saveAddress" value="yes" />}
                        label="J’ai lu et j’accepte les mentions légales, notamment la mention relative à la protection des données personnelles."
                    />
                </Grid>
            </Grid>
        </>
    );
}