import React from "react";
import { withStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "./styles";
import NotesIcon from "@material-ui/icons/Notes";

const firebase = require("firebase");

class NavbarComponentOut extends React.Component {
    constructor() {
        super();
        this.state = {
            logged: true
        }
    }
    render() {


        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#263238' }} >
                    <Toolbar>
                        <NotesIcon className={classes.icon} />
                        <Typography  variant="h6" className={classes.title}>
                            Mynotes
                        </Typography>
                        <Button onClick={this.loggedout} on href='/'  color="inherit">Logout</Button>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }


    loggedout = async () => {

         firebase
            .auth()
            .signOut()

    };
}


export default withStyles(styles)(NavbarComponentOut) ;
