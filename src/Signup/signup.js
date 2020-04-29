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

class SignupComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            passwordConfirmation: null,
            signupError: ''
        };
    }

    render() {

        const { classes } = this.props;

        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Iscriviti!
                    </Typography>
                    <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-email-input'>Inserisci la tua Email</InputLabel>
                            <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='signup-email-input'/>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-input'>Crea una Password</InputLabel>
                            <Input type="password" onChange={(e) => this.userTyping('password', e)} id='signup-password-input'/>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signup-password-confirmation-input'>Conferma la tua Password</InputLabel>
                            <Input type="password" onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'/>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Iscriviti</Button>
                    </form>
                    {
                        this.state.signupError ?
                            <Typography className={classes.errorText} component='h5' variant='h6'>
                                {this.state.signupError}
                            </Typography> :
                            null
                    }
                    <h5 className={classes.hasAccountHeader}>Hai già un Account?</h5>
                    <Link className={classes.logInLink} to='/login'>Log In!</Link>
                </Paper>
            </main>
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

            case 'passwordConfirmation':
                this.setState({ passwordConfirmation: event.target.value });
                break;

            default:
                break;
        }
    }

    formIsValid = () => this.state.password === this.state.passwordConfirmation;

    submitSignup = (e) => {
        e.preventDefault();

        if(!this.formIsValid()) {
            this.setState({ signupError: 'Le Password non corrispondono' });
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authRes => {
                const userObj = {
                    email: authRes.user.email,
                    notes: null

                };
                firebase
                    .firestore()
                    .collection('users')
                    .doc(this.state.email)
                    .set(userObj)
                    .then(() => {
                        this.props.history.push('/dashboard');
                    }, dbErr => {
                        console.log('Failed to add user to the database: ', dbErr);
                        this.setState({ signupError: 'Failed to add user' });
                    });
            }, authErr => {
                console.log('Failed to create user: ', authErr);
                this.setState({ signupError: 'Failed to add user' });
            });
    };
}

export default withStyles(styles)(SignupComponent);