import React from "react";
import { withStyles} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from "./styles";

class NavbarComponentOut extends React.Component {
    constructor() {
        super();
        this.state = {
            logged: false
        }
    }
    render() {


        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#006974' }} >
                    <Toolbar>
                        <Typography  variant="h6" className={classes.title}>
                            Mynotes
                        </Typography>
                        <Button onClick={this.loggedIn} href='/'  color="inherit">Logout</Button>


                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    loggedIn = () => {
        this.setState({logged: !this.state.logged}) ;
    }
}


export default withStyles(styles)(NavbarComponentOut) ;
