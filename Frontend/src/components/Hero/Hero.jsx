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
import "./Hero.css"
function Hero() {
    const cards = [{
        title: "Profil",
        description: "Sélectionnez le profil qui vous correspond le plus",
        image: "./assets/numbers/ICON 1.svg",
    }, {
        title: "Package",
        description: "Choisissez le package qui vous convient",
        image: "./assets/numbers/ICON 2.svg",
    }, {
        title: "Formulaire",
        description: "Remplissez le formulaire de pré-ouverture de compte en ligne",
        image: "./assets/numbers/ICON 3.svg",
    }, {
        title: "Conseiller",
        description: "Un conseiller prendra contact avec vous afin de vous proposer un RDV en agence",
        image: "./assets/numbers/ICON 4.svg",
    }]
    return (
        <>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 16,
                    pb: 6,
                }}

                className="hero"
            >
                <Container maxWidth="xl">
                    <Grid item key={"card"} xs={12} sm={6} md={4}>
                        <Card
                            sx={{display: 'flex', flexDirection: 'row' }}
                            className="card"
                        >
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Grid className='title pb_30 pt_45'>
                                    <Typography gutterBottom variant="h5" component="h2" className='title_card'>
                                        Comment
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2" className='title_card_question'>
                                        ça marche?
                                    </Typography>
                                </Grid>
                            </CardContent>
                            <CardContent sx={{ flexGrow: 1 , display:"flex" , justifyContent:"flex-end" }}>
                                {cards.map((card) => (
                                    <Grid item width="160px" key={card} xs={12} sm={6} md={4}>
                        
                                            <CardMedia
                                                component="img"
                                                sx={{
                                                    // 16:9
                                                    width: "80px",
                                                    alignSelf:"center",
                                                    mx:'auto'
                        
                                                }}
                                                image={card.image}
                                                alt="random"
                                            />
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <Grid className='title pb_30'>
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
                                    </Grid>
                                ))}
                            </CardContent>

                        </Card>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Hero