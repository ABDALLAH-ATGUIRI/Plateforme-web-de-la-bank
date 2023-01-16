import './App.css';
import Header from './components/Header/Header';
import { Grid, Container } from "@mui/material"
import Footer from './components/Footer/Footer';
import Home from "./pages/Home/Home"
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register'
import Client from './pages/Client/Client';
import { Route, Routes } from "react-router";
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <>
      < Container className='' >
        <Header />
        <Grid item className='container_page'>
          <div className='main-content container_shadow'>
            <Routes>
              <Route path="/" element={<Layout />} >

                {/* public routes */}
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register/>} />

                {/* protect these routes */}
                {/* <Route element={<RequireAuth />}> */}

                  <Route path='client' element={<Client />} />

                {/* </Route> */}

              </Route>


            </Routes>

          </div>
        </Grid>
        <Footer />
      </Container >
    </>

  );
}

export default App;
