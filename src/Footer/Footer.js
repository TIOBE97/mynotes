import React from "react";
import Typography from "@material-ui/core/Typography";
import {IconButton} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


function Copyright() {
    return (
        <Typography variant="body2" style={{color: '#ffffff'}} align="center">
            {'Copyright © Cristian Ernesto '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const style = {
    backgroundColor: "#000000",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20vh",
    width: "100%",
}

const phantom = {
    display: 'block',
    padding: '20px',
    height: '60px',
    width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children }
                <Typography variant="h6" align="center" style={{color: '#ffffff'}} gutterBottom>
                    About me:
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color: '#ffffff'}} component="p">
                    <IconButton aria-label='Github.com' onClick={()=> window.open('https://github.com/TIOBE97')}>
                        <GitHubIcon style={{color: 'white'}}/>
                    </IconButton>
                    <IconButton aria-label='Linkedi.it' onClick={()=> window.open('https://www.linkedin.com/in/cristian-ernesto-819bab198/')}>
                        <LinkedInIcon style={{color: 'white'}}/>
                    </IconButton>

                </Typography>
                <Copyright  />
            </div>
        </div>
    )
}

export default Footer