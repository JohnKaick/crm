import React from 'react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
    margin: '20px',
    width: '320px',
    display: 'inline-block',
}

export default class Painel extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Empresa" iconElementRight={<FlatButton label="Cadastrar" />} />

                <Paper style={style} zDepth={2} >
                    <Card>
                        <CardActions>
                            <FloatingActionButton mini={true} secondary={true} style={{ float: 'right' }}>
                                <ContentAdd />
                            </FloatingActionButton>
                        </CardActions>
                        <CardHeader title='Renan Souza' subtitle="Contato: 3120-9000" />
                        <CardActions>
                            <FlatButton label="Informações" primary={true} />
                            <FlatButton label="Editar" primary={true} style={{ float: 'right' }} />
                        </CardActions>
                    </Card>
                </Paper>
                <Paper style={style} zDepth={2} >
                    <Card>
                        <CardActions>
                            <FloatingActionButton mini={true} secondary={true} style={{ float: 'right' }}>
                                <ContentAdd />
                            </FloatingActionButton>
                        </CardActions>
                        <CardHeader title='Renan Souza' subtitle="Contato: 3120-9000" />
                        <CardActions>
                            <FlatButton label="Informações" primary={true} />
                            <FlatButton label="Editar" primary={true} style={{ float: 'right' }} />
                        </CardActions>
                    </Card>
                </Paper>
                <Paper style={style} zDepth={2} >
                    <Card>
                        <CardActions>
                            <FloatingActionButton mini={true} secondary={true} style={{ float: 'right' }}>
                                <ContentAdd />
                            </FloatingActionButton>
                        </CardActions>
                        <CardHeader title='Renan Souza' subtitle="Contato: 3120-9000" />
                        <CardActions>
                            <FlatButton label="Informações" primary={true} />
                            <FlatButton label="Editar" primary={true} style={{ float: 'right' }} />
                        </CardActions>
                    </Card>
                </Paper>
            </div >
        )
    }
}
