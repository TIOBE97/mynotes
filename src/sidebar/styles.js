const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    newNoteBtn: {
        width: '18%',
        height: '10%',
        borderBottom: '1px solid black',
        borderRadius: '0px',
        backgroundColor: '#09197d',
        color: 'white',
        '&:hover': {
            backgroundColor: '#88a2ce'
        }
    },
    sidebarContainer: {
        marginTop: '0px',
        width: '300px',
        height: '100%',
        boxSizing: 'border-box',
        float: 'left'
    },
    newNoteInput: {
        width: '100%',
        margin: '0px',
        height: '35px',
        outline: 'none',
        border: 'none',
        paddingLeft: '5px',
        '&:focus': {
            outline: '2px solid rgba(81, 203, 238, 1)'
        }
    },
    newNoteSubmitBtn: {
        width: '100%',
        backgroundColor: '#28787c',
        borderRadius: '0px',
        color: 'white'
    },
    jumbotroncontainer: {
        height: '23%',

    }
});

export default styles;