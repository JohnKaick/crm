import React from 'react';

import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

export default (props) => {
    const {
        showCadastrar
    } = props

    return (
        <div>
            <Row className="show-grid">
                <Col md={12}>
                    <br />
                    <form>
                        <Row className="show-grid">
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>Nome</ControlLabel>
                                    <FormControl
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>CNPJ</ControlLabel>
                                    <FormControl
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Endereço completo</ControlLabel>
                            <FormControl
                                type="text"
                            />
                        </FormGroup>
                        <Row className="show-grid">
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>Categoria</ControlLabel>
                                    <FormControl componentClass="select">
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>Origem</ControlLabel>
                                    <FormControl componentClass="select" >
                                        <option value="select">select</option>
                                        <option value="other">...</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Telefone</ControlLabel>
                                    <FormControl
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Website</ControlLabel>
                                    <FormControl
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Responsável</ControlLabel>
                                    <FormControl
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Descrição</ControlLabel>
                            <FormControl
                                type="text"
                                componentClass="textarea"
                            />
                        </FormGroup>
                        <ButtonGroup style={{ float: 'right' }}>
                            <Button bsStyle="info" type="submit"><Glyphicon glyph="glyphicon glyphicon-ok" /> Salvar</Button>
                            <Button onClick={showCadastrar}><Glyphicon glyph="glyphicon glyphicon-remove" /> Cancelar</Button>
                        </ButtonGroup>
                    </form>
                </Col>
            </Row>
        </div >
    )
}