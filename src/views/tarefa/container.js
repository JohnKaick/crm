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

const style = {
    margin: '20px',
    maxWidth: '500px',
    display: 'inline-block',
}

export default class Painel extends React.Component {
    render() {
        return (
            <div>
                <AppBar title="Tarefa" iconElementRight={<FlatButton label="Cadastrar"/>}/>

                <Paper style={style} zDepth={2} >
                    <Card>
                        <CardHeader title='Dia: 02/11/2017' style={{ float: 'right' }} />
                        <CardTitle title="Realizar visita" subtitle="John Kaick" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardHeader title='Negócio: CRM' subtitle="Empresa: Interativa" />
                        <CardActions>
                            <FlatButton label="Editar" primary={true} />
                            <FlatButton label="Excluir" secondary={true} style={{ float: 'right' }} />
                        </CardActions>
                    </Card>
                </Paper>

                <Paper style={style} zDepth={2} >
                    <Card>
                        <CardHeader title='Dia: 04/11/2017' style={{ float: 'right' }} />
                        <CardTitle title="Reunião" subtitle="John Kaick" />
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardHeader title='Negócio: CRM' subtitle="Contato: Renan Souza" />
                        <CardActions>
                            <FlatButton label="Editar" primary={true} />
                            <FlatButton label="Excluir" secondary={true} style={{ float: 'right' }} />
                        </CardActions>
                    </Card>
                </Paper>

            </div >
        )
    }
}
