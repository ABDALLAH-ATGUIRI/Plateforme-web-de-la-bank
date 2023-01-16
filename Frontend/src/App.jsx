import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { Grid, Container, Paper, TextField, Button, IconButton, InputAdornment } from "@mui/material"
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home"
import Auth from './pages/Auth/Auth';
import Client from './pages/Client/Client';

function App() {
  return (
    <>
      < Container className='' >
        <Header />
        <Grid item className='container_page'>
          <div className='main-content container_shadow'>
            {/* <Home/> */}
            {/* <Login /> */}
            {/* <Auth/> */}
            <Client/>
            {/* <RouterProvider router={router} /> */}
          </div>
        </Grid>
        <Footer />
      </Container >
    </>

  );
}

export default App;
