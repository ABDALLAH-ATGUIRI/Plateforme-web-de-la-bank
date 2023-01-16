import { Grid, Container, Paper, TextField, Button, IconButton, InputAdornment, Typography } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./ValidatePassword.css"

function ValidatePassword({ info, setUserInfo }) {
  const [values, setValues] = useState({
    firstName: info.firstName,
    lastName: info.lastName,
    email: info.email,
    birth: info.birth,
    cin: info.cin,
    phone: info.phone,
    password: "",
    accept: info.accept
  })

  const [input, setInput] = useState({
    password: '',
    confirmPassword: '',
    showPass1: false,
    showPass2: false,

  });


  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  })

  const showButton = (x) => {
    setValues({
      ...values,
      accept: x
    })
  }


  const validateInput = (e) => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
      showButton(true)

      switch (name) {
        case "password":
          if (!value) {
            showButton(false)
            stateObj[name] = "Veuillez entrer Confirmer le mot de passe.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            showButton(false)
            stateObj["confirmPassword"] = "Le mot de passe et la confirmation du mot de passe ne correspondent pas.";
          } else {
            showButton(false)
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            showButton(false)
            stateObj[name] = "Veuillez entrer Confirmer le mot de passe.";
          } else if (input.password && value !== input.password) {
            showButton(false)
            stateObj[name] = "Le mot de passe et la confirmation du mot de passe ne correspondent pas.";
          }

          break;

        default:
          break;
      }
      return stateObj;
    });
  }

  const handlePassVisibility1 = () => {
    setInput({
      ...input,
      showPass1: !input.showPass1
    })
  }

  const handlePassVisibility2 = () => {
    setInput({
      ...input,
      showPass2: !input.showPass2
    })
  }

  useEffect(() => { setUserInfo(values) }, [values])

  return (
    <>
      <Container item >
        <Grid container direction="column" spacing={2}>
          <Typography gutterBottom variant="h5" component="h2" className='title_confirmation_card' sx={{ fontWeight: "bold" }}>
            Validation mot de passe
          </Typography>
          <Typography gutterBottom variant="p" component="p" className="validate_pass_warning" >
            It should be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters*.
          </Typography>
        </Grid>

        <Grid container paddingBottom="20px" direction="column" spacing={3}>
          <Grid item >
            <TextField
              type={input.showPass1 ? ("text") : ("password")}
              fullWidth
              name="password"
              label="Enter your mot de passe"
              placeholder="mot de passe"
              variant='outlined'
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePassVisibility1} aria-label="toggle password" edge="end">
                      {
                        input.showPass1 ? (<VisibilityOffIcon />) : (<VisibilityIcon />)
                      }
                    </IconButton>
                  </InputAdornment>)
              }}
              onChange={async (e) => {
                const { name, value } = e.target;
                setValues({
                  ...values,
                  password: value
                })

                setInput(prev => ({
                  ...prev,
                  [name]: value
                }));

                // validateInput(e);
              }}

            />
            {error.password && <span className='err'>{error.password}</span>}

          </Grid>

          <Grid item >
            <TextField
              type={input.showPass2 ? ("text") : ("password")}
              fullWidth
              name="confirmPassword"
              label="Enter your password"
              placeholder="Confirmer le mot de passe"
              variant='outlined'
              required="required"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePassVisibility2} aria-label="toggle password" edge="end">
                      {
                        input.showPass2 ? (<VisibilityOffIcon />) : (<VisibilityIcon />)
                      }
                    </IconButton>
                  </InputAdornment>)
              }}
              onChange={(newValue) => {
                const { name, value } = newValue.target;
                setInput(prev => ({
                  ...prev,
                  [name]: value
                }));
                validateInput(newValue);
              }}
            />
            {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}

          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default ValidatePassword