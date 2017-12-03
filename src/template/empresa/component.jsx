import React from 'react';

import { Grid, Row, Col, FormGroup, InputGroup, ListGroupItem, FormControl, Button, Glyphicon } from 'react-bootstrap';

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

export default props => (
    <Grid>

        <Row className="show-grid">
            <Col md={4}>
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon><Glyphicon glyph="glyphicon glyphicon-search" /></InputGroup.Addon>
                        <FormControl type="text" />
                        <InputGroup.Button>
                            <Button bsStyle="info" onClick={props.onCadastrar}>
                                <Glyphicon glyph="glyphicon glyphicon-plus" /> Cadastrar
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </Col>
        </Row>

        <Row className='show-grid' >
            {(props.empresas || []).map(p => {
                (
                    <Col md={4} style={styles.col}>
                        <ListGroupItem header={p.nome} style={styles.lista} onClick={props.onSelecionarEmpresa}>
                            <Button bsStyle="warning" style={styles.buttonRedondo}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
                            <span style={styles.nomeCinza}>{p.categoria}</span><br />
                            <span>{p.telefone}</span>
                        </ListGroupItem>
                    </Col>
                )
            })}
        </Row>
    </Grid >
)
