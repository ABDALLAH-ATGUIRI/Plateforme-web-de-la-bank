import { Grid, Container, Paper, TextField, Button, IconButton, InputAdornment, Typography } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Validate_password.css"

function Validate_password() {
  const [values1, setValues1] = useState({
    password: "",
    showPass: false
  })
  const [values2, setValues2] = useState({
    password: "",
    showPass: false
  })
  const handlePassVisibility1 = () => {
    setValues1({
      ...values1,
      showPass: !values1.showPass
    })
  }
  const handlePassVisibility2 = () => {
    setValues2({
      ...values2,
      showPass: !values2.showPass
    })
  }

  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Container item >
        <Grid container direction="column" spacing={2}>
          <Typography gutterBottom variant="h5" component="h2" className='title_confirmation_card' sx={{ fontWeight: "bold" }}>
            Validation mot de passe
          </Typography>
          <Typography gutterBottom variant="p" component="p" className="validate_pass_warning" >
            It should be at least 8 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters*.          </Typography>
        </Grid>

        <Grid container paddingBottom="20px" direction="column" spacing={3}>
          <Grid item >
            <TextField
              type={values1.showPass ? ("text") : ("password")}
              fullWidth
              label="Enter your mot de passe"
              placeholder="mot de passe"
              variant='outlined'
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePassVisibility1} aria-label="toggle password" edge="end">
                      {
                        values1.showPass ? (<VisibilityOffIcon />) : (<VisibilityIcon />)
                      }
                    </IconButton>
                  </InputAdornment>)
              }}
            // inputRef={register({
            //   required: "You must specify a password",
            //   minLength: {
            //     value: 8,
            //     message: "Password must have at least 8 characters"
            //   }
            // })}
            />
            {/* {errors.password && <p>{errors.password.message}</p>} */}

          </Grid>
          <Grid item >
            <TextField
              type={values2.showPass ? ("text") : ("password")}
              fullWidth
              label="Enter your password"
              placeholder="Password"
              variant='outlined'
              required="required"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePassVisibility2} aria-label="toggle password" edge="end">
                      {
                        values2.showPass ? (<VisibilityOffIcon />) : (<VisibilityIcon />)
                      }
                    </IconButton>
                  </InputAdornment>)
              }}
            // inputRef={register({
            //   validate: value =>
            //     value === password.current || "The passwords do not match"
            // })}
            />
            {/* {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}

          </Grid>
        </Grid>



      </Container>

    </>
  )
}

export default Validate_password