import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import 'react-quill/dist/quill.snow.css';
import 'antd/dist/antd.css';
import './styles.css';
import {Layout, Menu, Breadcrumb} from 'antd';

const { Content} = Layout;


class EditorComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }

    componentDidMount = () => {
        this.setState({
            text: this.props.selectedNote.body,
            title: this.props.selectedNote.title,
            id: this.props.selectedNote.id
        });
    }

    componentDidUpdate = () => {
        if (this.props.selectedNote.id !== this.state.id) {
            this.setState({
                text: this.props.selectedNote.body,
                title: this.props.selectedNote.title,
                id: this.props.selectedNote.id
            });
        }
    }

    render() {

        const {classes} = this.props;

        return (
            <div>
                <Layout style={{minHeight: '100vh', marginLeft: '19vw'}}>
                    <Layout className="site-layout">
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Editor della nota:</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{padding: 24, minHeight: 500}}>
                                <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
                                <input
                                    className={classes.titleInput}
                                    placeholder='Titolo...'
                                    value={this.state.title ? this.state.title : ''}
                                    onChange={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <ReactQuill theme="snow" style={{overflowY: 'hidden'}}
                                            value={this.state.text}
                                            onChange={this.updateBody}>
                                </ReactQuill>

                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }

    updateBody = async (val) => {
        await this.setState({text: val});
        this.update();
    };
    updateTitle = async (txt) => {
        await this.setState({title: txt});
        this.update();
    }
    update = debounce(() => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
    }, 1500);
}

export default withStyles(styles)(EditorComponent);



