
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        height: 'calc(100% - 35px)',
        position: 'absolute',
        left: '0',
        width: '300px',
        boxShadow: '0px 0px 2px black'
    },
    Paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    noAccountHeader: {
        width: '100%'
    },
    signUpLink: {
        width: '100%',
        textDecoration: 'none',
        color: '#303f9f',
        fontWeight: 'bolder'
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    }
});

export default styles;