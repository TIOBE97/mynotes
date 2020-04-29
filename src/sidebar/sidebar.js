import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import SidebarItemComponent from "../sidebarItem/sidebaritem";
import Jumbotron from "react-bootstrap/Jumbotron";
import Fade from "@material-ui/core/Fade";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";
import 'antd/dist/antd.css';
import './styles.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null,
            collapsed: false,
        };
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { Header, Content, Footer, Sider } = Layout;
        const { notes, classes, selectedNoteIndex } = this.props;

        if(notes) {
            return(
                <div className={classes.sidebarContainer}>

                        <Sider  width={'20vw'} style={{height: '100vh', overflow: 'auto', left: 0,position: 'fixed'}}  >
                                <Button
                                    onClick={this.newNoteBtnClick}
                                    type='primary' style={{backgroundColor: '#008394', borderBlock: 'none'}}  block>{this.state.addingNote ? 'Cancella' : 'Nuova Nota'}</Button>

                            { this.state.addingNote?
                                <div>
                                    <input type='text'
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
                                        <Divider light={true}></Divider>
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




/*<Layout className="site-layout">
    <Header className="site-layout-background" style={{ padding: 0 }} />
    <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
</Layout>*/  //layout per inserire l'editor component



