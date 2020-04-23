import React from "react";
import { withStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "./styles";

class NavbarComponent extends React.Component {
    render() {


        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#3f527d' }} >
                    <Toolbar>
                        <Typography  variant="h6" className={classes.title}>
                            Mynotes
                        </Typography>
                        <Button href='/login' color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default withStyles(styles)(NavbarComponent) ;
