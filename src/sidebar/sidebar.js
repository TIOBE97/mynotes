import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from "../sidebarItem/sidebaritem";
import Jumbotron from "react-bootstrap/Jumbotron";
import Fade from "@material-ui/core/Fade";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }
    render() {

        const { notes, classes, selectedNoteIndex } = this.props;

        if(notes) {
            return(
                <div>
                    <Fade in='checked'>
                    <Jumbotron style={{ height: 250 }}>
                        <h1>Benvenuto su Mynotes!</h1>
                        <p>
                            Mynotes ti aiuta a catturare e a ordinare idee, progetti e liste di cose da fare: non ti sfuggirà più nulla. Per iniziare premi "Nuova Nota" oppure selezionane una per modificarla.
                        </p>
                        <p>
                            <Button
                                onClick={this.newNoteBtnClick}
                                className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancella' : 'Nuova Nota'}</Button>
                        </p>
                    </Jumbotron>
                    </Fade>

                <div className={classes.sidebarContainer}>

                    {
                        this.state.addingNote ?
                            <form className={classes.container} noValidate>
                                <TextField className={classes.textField} placeholder='Inserisci un titolo'
                                           onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </TextField>
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Aggiungi Nota</Button>
                            </form> :
                            null
                    }
                    <List component="nav" aria-labelledby="nested-list-subheader" subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <h5>Le tue note:</h5>
                        </ListSubheader>
                    } className={classes.root}>
                        {
                            notes.map((_note, _index) => {
                                return(
                                    <div key={_index}>
                                        <SidebarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>
                                        </SidebarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
                </div>
            );
        } else {
            return(<div></div>);
        }
    }

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }
    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);

}

export default withStyles(styles)(SidebarComponent);
