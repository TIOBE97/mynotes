import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from './bgimage.jpg';
import {IconButton} from "@material-ui/core";
import Footer from "../Footer/Footer";



const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        height: '80vh',
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    footer: {
        backgroundColor: '#333',
        padding: theme.spacing(2),
    },
}));


export default function homepageComponent() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <div>
            <main >
                <div className={classes.heroContent} style={{backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundPosition: 'center 40%'}} >
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" style={{color: '#ffffff'}} gutterBottom>
                            <br/>
                            <br/>
                            Benvenuto su Mynotes
                        </Typography>
                        <Typography variant="h5" align="center" style={{color: '#ffffff'}} paragraph>

                            Gestisci di tutto, dai grandi progetti ai momenti personali.
                            <br/>
                            Cattura idee e ispirazioni in note e immagini.
                            <br/>
                            Non perdere mai traccia di attività e scadenze.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" style={{ background: '#263238', color: 'white' }} href={'/login'}>
                                        Per iniziare clicca qui
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>

            </main>
            <Footer/>
            </div>
        </React.Fragment>
    );
}
