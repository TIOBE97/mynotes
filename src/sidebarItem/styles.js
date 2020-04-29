const styles = theme => ({
    listItem: {
        cursor: 'pointer',
    },
    textSection: {
        maxWidth: '85%',
        color: '#33c9dc',

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