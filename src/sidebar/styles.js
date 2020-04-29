
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
        width: '100%',
        height: '10%',
        borderBottom: '1px solid black',
        borderRadius: '0px',
        backgroundColor: '#ffda5a',
        color: 'white',
        '&:hover': {
            backgroundColor: '#8889ce'
        }
    },
    sidebarContainer: {
        marginTop: '0px',
        width: '300px',
        height: '100%',
        boxSizing: 'border-box',
        float: 'left',


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
        backgroundColor: '#33c9dc',
        borderRadius: '0px',
        color: 'white'
    },

    placeholdercolor : {
        color: 'white'
    }

});

export default styles;