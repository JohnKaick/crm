import React from 'react';

import { Grid, Row, Col, Panel, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

import CadastrarEmpresa from './cadastrar.container';

const styles = {
    subHeader: {
        margin: '0', fontSize: '18px'
    },
    cadastrar: {
        float: 'right', cursor: 'pointer', color: '#5bc0de'
    },
    col: {
        paddingBottom: '15px'
    },
    lista: {
        cursor: 'pointer'
    },
    buttonRedondo: {
        float: 'right', 'border-radius': '20px'
    },
    nomeCinza: {
        color: 'gray'
    }
}

export default (props) => {

    const {
        showCadastrarResult, empresas,
        onSelecionarEmpresa, showCadastrar,
    } = props

    return (
        <Grid>

            <Row className="show-grid">
                <Col md={12}>
                    <Panel onClick={() => { }}>
                        <span style={styles.subHeader}>Empresa</span>
                        {showCadastrarResult ?
                            <CadastrarEmpresa showCadastrar={showCadastrar} /> :
                            <a bsStyle="link" style={styles.cadastrar} onClick={showCadastrar}><Glyphicon glyph="glyphicon glyphicon-plus" /> CADASTRAR</a>
                        }
                    </Panel>
                </Col>
            </Row>

            {!showCadastrarResult ?
                <Row className='show-grid' >
                    {(empresas || []).map(p => {
                        (
                            <Col md={4} style={styles.col}>
                                <ListGroupItem header={p.nome} style={styles.lista} onClick={onSelecionarEmpresa}>
                                    <Button bsStyle="warning" style={styles.buttonRedondo}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
                                    <span style={styles.nomeCinza}>{p.categoria}</span><br />
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