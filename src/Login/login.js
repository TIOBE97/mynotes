import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require("firebase");

class LoginComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            serverError: false
        };
    }

    render() {

        const { classes } = this.props;

        return (
            <div>
                <main className={classes.main} >
                    <CssBaseline/>
                    <Paper className={classes.paper} >
                        <Typography component="h1" variant="h5">
                            Log In!
                        </Typography>
                        <form onSubmit={(e) => this.submitLogin(e)} className={classes.form}>
                            <FormControl required fullWidth margin='normal'>
                                <InputLabel htmlFor='login-email-input'>Inserisci la tua Email</InputLabel>
                                <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='login-email-input'></Input>
                            </FormControl>
                            <FormControl required fullWidth margin='normal'>
                                <InputLabel htmlFor='login-password-input'>Inserisci la tua Password</InputLabel>
                                <Input autoComplete="current-password" type="password" onChange={(e) => this.userTyping('password', e)} id='login-password-input'></Input>
                            </FormControl>
                            <Button type='submit' fullWidth variant='contained' style={{ background: '#263238', color: 'white' }} className={classes.submit}>Log In</Button>
                        </form>
                        { this.state.serverError ?
                            <Typography className={classes.errorText} component='h5' variant='h6'>
                                Email o Password non corrette
                            </Typography> :
                            null
                        }
                        <h5 className={classes.noAccountHeader}>Non hai un Account?</h5>
                        <Link className={classes.signUpLink} to='/signup'>Iscriviti!</Link>
                    </Paper>
                </main>
            </div>
        );
    }

    userTyping = (whichInput, event) => {
        switch (whichInput) {
            case 'email':
                this.setState({ email: event.target.value });
                break;

            case 'password':
                this.setState({ password: event.target.value });
                break;

            default:
                break;
        }
    }

    submitLogin = async (e) => {
        e.preventDefault(); //previene il refreshing della pagina ogni volta che si inserisce qualcosa nel form

        await firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/dashboard');
            }, err => {
                this.setState({ serverError: true });
                console.log('Error logging in: ', err);
            });
    };

}

export default withStyles(styles)(LoginComponent);