import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import OpenAccount from '../OpenAccount/OpenAccount';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import Confirmation from '../Confirmation/Confirmation';
import Validate_password from '../Validate_password/Validate_password';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Formulaire de pré-ouverture de compte ', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <OpenAccount />;
        case 1:
            return <Validate_password/>;
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme();

function SignIn() {

    const [values, setValues] = useState({
        email: "",
        password: "",
        showPass: false
    })

    const handlePassVisibility = () => {
        setValues({
            ...values,
            showPass: !values.showPass
        })
    }

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Paper elevation={2} sx={{ padding: 5, position: "absolute", zIndex: 100, width: "80%", marginLeft: "100px", borderRadius: "20px" }} className="card_login">
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label} >
                                <StepLabel></StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length - 1 ? (
                        <Confirmation />
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Valider' : 'Suivante'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </ThemeProvider>
        </>
    )
}

export default SignIn