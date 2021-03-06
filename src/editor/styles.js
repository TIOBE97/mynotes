const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: 'calc(100% - 35px)',
        position: 'absolute',
        left: '0',
        width: '300px',
        boxShadow: '0px 0px 2px black'
    },
    titleInput: {
        height: '50px',
        boxSizing: 'border-box',
        border: 'none',
        fontSize: '24px',
        font: '#ffffff',
        width: '100%',
        backgroundColor: '#263238',
        color: 'white',
        paddingLeft: '50px'
    },
    editIcon: {
        position: 'fixed',
        left: '22.5vw',
        top: '21.5vh',
        color: 'white',
        width: '10',
        height: '10'
    },
    editorContainer: {
        fullwidth:'100%',
        marginTop:'0px',
        marginRight:'0px',
        boxSizing: 'border-box',
        height: '100vh',

    }
});

export default styles;