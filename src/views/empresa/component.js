import React from 'react';

import { Grid, Row, Col, Panel, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

import CadastrarEmpresa from './cadastrar.container';
import DetalhesEmpresa from './detalhes.container';

export default (props) => {

    const {
        showCadastrarResult, empresas,
        showCadastrar,
    } = props

    return (
        <Grid>

            <Row className="show-grid">
                <Col md={12}>
                    <Panel onClick={() => { }}>
                        <span style={{ margin: '0', fontSize: '18px' }}>Empresas</span>
                        {showCadastrarResult ?
                            <CadastrarEmpresa showCadastrar={showCadastrar} /> :
                            <a bsStyle="link" style={{ float: 'right', cursor: 'pointer', color: '#5bc0de' }} onClick={showCadastrar}><Glyphicon glyph="glyphicon glyphicon-plus" /> CADASTRAR</a>
                        }
                    </Panel>
                </Col>
            </Row>

            {!showCadastrarResult ?
                <Row className='show-grid' >
                    {(empresas || []).map(p => {
                        (
                            <Col md={4} style={{ paddingBottom: '15px' }}>
                                <ListGroupItem header={p.nome} style={{ cursor: 'pointer' }}>
                                    <Button bsStyle="warning" style={{ float: 'right', 'border-radius': '20px' }}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
                                    <span style={{ color: 'gray' }}>{p.categoria}</span><br />
                                    <span>{p.telefone}</span>
                                </ListGroupItem>
                            </Col>
                        )
                    })}
                </Row>
                : null}
        </Grid >
    )
}