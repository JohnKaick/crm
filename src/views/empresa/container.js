import React from 'react';

import { Grid, Row, Col, Panel, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

import CadastrarEmpresa from './cadastrar.container'
import DetalhesEmpresa from './detalhes.container'

export default class empresa extends React.Component {

    constructor(props) {
        super(props)
        this.showCadastrar = this.showCadastrar.bind(this)
        this.state = { showCadastrarResult: false }
    }

    showCadastrar() {
        this.setState({
            showCadastrarResult: !this.state.showCadastrarResult,
        })
    }

    render() {
        return (
            <Grid>

                <Row className="show-grid">
                    <Col md={12}>
                        <Panel onClick={() => { }}>
                            <span style={{ margin: '0', fontSize: '18px' }}>Empresas</span>
                            {this.state.showCadastrarResult ?
                                <CadastrarEmpresa showCadastrar={this.showCadastrar} /> :
                                <a bsStyle="link" style={{ float: 'right', cursor: 'pointer', color: '#5bc0de' }} onClick={this.showCadastrar}><Glyphicon glyph="glyphicon glyphicon-plus" /> CADASTRAR</a>
                            }
                        </Panel>
                    </Col>
                </Row>

                {!this.state.showCadastrarResult ?
                    <Row className='show-grid' >
                        <Col md={4} style={{ paddingBottom: '15px' }}>
                            <ListGroupItem header="Ativati" style={{ cursor: 'pointer' }}>
                                <Button bsStyle="warning" style={{ float: 'right', 'border-radius': '20px' }}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
                                <span style={{ color: 'gray' }}>Cliente em potencial</span><br />
                                <span>(11) 3125-9000</span>
                            </ListGroupItem>
                        </Col>
                    </Row>
                    : null}
            </Grid >
        )
    }
}