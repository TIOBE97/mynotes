const styles = theme => ({
    listItem: {
        cursor: 'pointer',
    },
    textSection: {
        maxWidth: '85%',
        color: '#ffffff',

    },
    deleteIcon: {
        position: 'absolute',
        right: '5px',
        top: 'calc(50% - 15px)',
        '&:hover': {
            color: 'red'
        }
    },

    secondaryText : {
      color: '#ffffff'
    }
});

export default styles;