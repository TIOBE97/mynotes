import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import SidebarItemComponent from "../sidebarItem/sidebaritem";
import 'antd/dist/antd.css';
import './styles.css';
import { Layout, Menu, Button } from 'antd';




class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null,
            collapsed: false,
        };
    }
    render() {
        const {  Sider } = Layout;
        const { notes, classes, selectedNoteIndex } = this.props;

        if(notes) {
            return(
                <div className={classes.sidebarContainer}>

                        <Sider  width={'20vw'} style={{height: '100vh', overflow: 'auto', left: 0,position: 'fixed'}}  >
                                <Button
                                    onClick={this.newNoteBtnClick}
                                    type='primary' style={{backgroundColor: '#455a64', border: '0px'}}  block>{this.state.addingNote ? 'Cancella' : 'Nuova Nota'}</Button>

                            { this.state.addingNote?
                                <div>
                                    <input type='text' style={{border: '0px'}}
                                           className={classes.newNoteInput}
                                           placeholder='Inserisci il titolo...'
                                           onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                    </input>
                                    <Button
                                        className={classes.newNoteSubmitBtn}
                                        onClick={this.newNote}>Aggiungi Nota</Button>
                                </div> :
                                null
                            }
                            <Menu theme="dark"  mode="inline">

                        <List >
                        {
                            notes.map((_note, _index) => {
                                return(
                                    <div key={_index}>
                                        <SidebarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote} >
                                        </SidebarItemComponent>
                                        <Divider light={true}/>
                                    </div>
                                )
                            })
                        }
                    </List>


                            </Menu>
                        </Sider>




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







