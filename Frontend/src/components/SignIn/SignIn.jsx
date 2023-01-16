import Box from '@mui/material/Box';
import OpenAccount from '../OpenAccount/OpenAccount';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useEffect, useState } from 'react'
import Confirmation from '../Confirmation/Confirmation';
import ValidatePassword from '../Validate_password/ValidatePassword';
import axios from "../../api/axios"
const steps = ['Formulaire de pré-ouverture de compte ', 'Payment details', 'Review your order'];
const SIGN_IN_URL = "/user/signIn";
const theme = createTheme();

function SignIn() {

    const [info, setInfo] = useState({});

    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const createAccount = async (data) => {
        try {
            const response = await axios.post(
                SIGN_IN_URL,
                JSON.stringify({ data }),
                {
                    headers: {
                        "Content-Type": "application/json",
                        withCredentials: true
                    }
                })

            console.log(response.data)
            console.log(response.accessToken)
            // setSuccess(true)

        } catch (error) {
            if (!error?.response) {
                console.error("No server response")
            } else if (error.response?.status == 400) {
                console.error("Username Taken")
            } else {
                console.error("Registration Failed")
            }
        }
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <OpenAccount
                    info={info} setUserInfo={(newInfo) => {
                        setInfo({ ...newInfo });
                    }} />;
            case 1:
                return <ValidatePassword
                    info={info} setUserInfo={(newInfo) => {
                        setInfo({ ...newInfo });
                    }} />;
            case 3:
                createAccount(info)
                break
            default:
                throw new Error('Unknown step');
        }
    }

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
                            {
                                Object.values(info).every(v => v) ? (
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
                                            {activeStep === steps.length ? 'Valider' : 'Suivante'}
                                        </Button>
                                    </Box>
                                ) : null
                            }
                        </React.Fragment>
                    )}
                </Paper>
            </ThemeProvider>
        </>
    )
}

export default SignIn