import React from 'react';
import SidebarComponent from "../sidebar/sidebar";
import EditorComponent from "../editor/editor";
import '../editor/styles.css';
import 'antd/dist/antd.css';
import '../editor/styles.css';


import NavbarComponentOut from "../Navbar/navbarout";


const firebase = require('firebase');

class dashboardComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedNoteIndex: null,
            selectedNote: null,
            notes: null
        };
    }


    render() {

        const { notes, classes, selectedNoteIndex } = this.props;


            return(
                <div className="app-container">
                    <NavbarComponentOut/>
                    <SidebarComponent history={this.props.history}
                                      selectedNoteIndex={this.state.selectedNoteIndex}
                                      notes={this.state.notes}
                                      deleteNote={this.deleteNote}
                                      selectNote={this.selectNote}
                                      newNote={this.newNote}/>


                    {

                        this.state.selectedNote ?
                            <EditorComponent selectedNote={this.state.selectedNote}
                                             selectedNoteIndex={this.state.selectedNoteIndex}
                                             notes={this.state.notes}
                                             noteUpdate={this.noteUpdate}/> : null



                    }
                </div>
            );

    }

    componentDidMount = () => {
        firebase
            .auth().onAuthStateChanged(async _usr =>{
                if(!_usr) this.props.history.push('/login');
                else {await firebase.firestore()
                    .collection('notes')
                    .where('users','==',_usr.email)
                    .onSnapshot(async serverUpdate => {
                        const notes = serverUpdate.docs.map(_doc => {
                            const data = _doc.data();
                            data['id'] = _doc.id;
                            return data;
                        });
                        console.log(notes);
                        await this.setState({ email: _usr.email, notes: notes });
                    });}
        }
        )

    };

    selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });
    noteUpdate = (id, noteObj) => {
        firebase
            .firestore()
            .collection('notes')
            .doc(id)
            .update({
                title: noteObj.title,
                body: noteObj.body,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
    };
    newNote = async (title,_usr) => {
        const note = {
            title: title,
            body: '',
            users: this.state.email
        };
        const newFromDB = await firebase
            .firestore()
            .collection('notes')
            .add({
                title: note.title,
                body: note.body,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                users: note.users
            });
        const newID = newFromDB.id;
        await this.setState({ notes: [...this.state.notes, note] });
        const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
        this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });
    };
    deleteNote = async (note) => {
        const noteIndex = this.state.notes.indexOf(note);
        await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
        if(this.state.selectedNoteIndex === noteIndex) {
            this.setState({ selectedNoteIndex: null, selectedNote: null });
        } else {
            this.state.notes.length > 1 ?
                this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
                this.setState({ selectedNoteIndex: null, selectedNote: null });
            if(this.state.notes.length >= 1) {

                this.state.selectedNoteIndex < noteIndex ?
                    this.selectNote(this.state.notes[this.state.selectedNoteIndex], this.state.selectedNoteIndex)
                    :
                    this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1)

            } else {
                this.setState({ selectedNote: null})
            }
        }

        firebase
            .firestore()
            .collection('notes')
            .doc(note.id)
            .delete();
    }
}

export default dashboardComponent;


