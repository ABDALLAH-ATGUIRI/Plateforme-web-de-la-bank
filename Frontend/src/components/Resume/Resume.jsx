import * as React from 'react';
import "./Resume.css"
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Hero from '../Hero/Hero';

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

const cards = [{
    title: "Étudiants",
    description: "Profitez d'une offre complète à 0Dhs et bénéficiez de réductions auprès de nos partenaires",
    image: "./assets/cards/etudiant (1).svg",
    link: "Plus d'informations"
}, {
    title: "Jeunes actifs (-35ans)",
    description: "Découvrez l'offre Mozaïc dédié aux jeunes actifs et profitez d’avantages extra bancaires auprès de nos partenaires",
    image: "./assets/cards/jeunes (1).svg",
    link: "Plus d'informations"
}, {
    title: "Salarié ou fonctionnaire (+35ans) ",
    description: "Bénéficiez d’un accompagnement complet tout au long de vos moments de vie",
    image: "./assets/cards/Résidents.svg",
    link: "Plus d'informations"
}]
const theme = createTheme();

export default function Resume() {
    return (
        <ThemeProvider theme={theme} >
            <main>
                <Hero />
                <Container maxWidth="md">
                    <Grid item key={"card"} sx={{ display: 'flex', alignItems: "center", flexDirection: 'row' }} xs={12} sm={6} md={4}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Grid className='title pb_30 pt_45'>
                                <Typography gutterBottom variant="h5" component="h2" className='packages_title'>
                                    Nos packages
                                </Typography>
                                <Typography gutterBottom variant="h2" component="h1" className='packages_description_title'>
                                    Des offres sur mesure adaptées à vos besoins
                                </Typography>
                            </Grid>
                        </CardContent>
                        <CardContent sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
                            <Grid className='description_text pb_30 pt_45'>
                                <Typography gutterBottom variant="p" component="p" className='title_card_question'>
                                    Vous êtes étudiant ou jeune actif? Vous êtes salarié ou fonctionnaire?
                                    CRÉDIT DU MAROC met à votre disposition une panoplie d'offres pour vous accompagner au quotidien.
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Grid>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '16.25%',
                                        }}
                                        image={card.image}
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Grid className='title pb_30 pt_45'>
                                            <span></span>
                                            <Typography gutterBottom variant="h5" component="h2" className='title_text'>
                                                {card.title}
                                            </Typography>
                                        </Grid>

                                        <Typography className='description_text'>
                                            {card.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions justifyContent="center" >
                                        <Button size="small">{card.link}</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </ThemeProvider >
    );
}