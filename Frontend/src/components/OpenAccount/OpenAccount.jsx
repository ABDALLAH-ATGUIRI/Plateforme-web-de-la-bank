import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';

export default function OpenAccount({ info , setUserInfo }) {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        birth: new Date().toLocaleDateString(),
        cin: "",
        phone: "",
        accept: false
    })
    useEffect(() => { setUserInfo(values) }, [values])
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
                        onChange={(newValue) => {
                            setValues({
                                ...values,
                                firstName: newValue.target.value
                            })
                        }}
                        value={info.firstName}
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
                        onChange={(newValue) => {
                            setValues({
                                ...values,
                                lastName: newValue.target.value
                            })
                        }}
                        value={info.lastName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Inscrivez votre e-mail"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                        onChange={(newValue) => {
                            setValues({
                                ...values,
                                email: newValue.target.value
                            })
                        }}
                        value={info.email}

                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="birth"
                        type="date"
                        name="birth"
                        label="Date de naissance"
                        placeholder=""
                        fullWidth
                        autoComplete="date of birth"
                        variant="outlined"
                        onChange={(newValue) => {
                            setValues({
                                ...values,
                                birth: newValue.target.value
                            })
                        }}
                        value={info.birth}

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
                        onChange={(newValue) => {
                            setValues({
                                ...values,
                                cin: newValue.target.value
                            })
                        }}
                        value={info.cin}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Numéro de téléphone"
                        fullWidth
                        autoComplete="Telephone number"
                        variant="outlined"
                        onChange={(newValue) => {
                            setValues({
                                ...values,
                                phone: newValue.target.value
                            })
                        }}
                        value={info.phone}

                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        required
                        control={<Checkbox color="error" name="saveAddress" value="yes" />}
                        label="J’ai lu et j’accepte les mentions légales, notamment la mention relative à la protection des données personnelles."
                        onChange={() => {
                            setValues({
                                ...values,
                                accept: !values.accept
                            })
                        }}
                        checked={info.accept}

                    />
                </Grid>
            </Grid>
        </>
    );
}