import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { Grid, Container, Paper, TextField, Button, IconButton, InputAdornment } from "@mui/material"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* <Login /> */}
      < Container className='top_30' >
      <Header />
          <Grid item className='container_page'>
            <div className='main-content container_shadow'>
              {/* <RouterProvider router={router} /> */}
            </div>
          </Grid>
      <Footer/>
      </Container >
    </>

  );
}

export default App;
