import React from 'react';

import { Grid, Row, Col, Panel, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

export default class Negocio extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Grid>

                <Row className="show-grid">
                    <Col md={12}>
                        <Panel onClick={() => { }}>
                            <span style={{ margin: '0', fontSize: '18px' }}>Negócios</span>
                            <a bsStyle="link" style={{ float: 'right', cursor: 'pointer', color: '#5bc0de' }} onClick={() => { }}><Glyphicon glyph="glyphicon glyphicon-plus" /> CADASTRAR</a>
                        </Panel>
                    </Col>
                </Row>

                <Row className='show-grid' >
                    <Col md={12} >
                        <Panel header="Funil de vendas">
                            <Row className='show-grid' >
                                <Col md={6}>
                                    <h3>3 negócio(s) em andamento</h3>
                                </Col>
                                <Col md={6}>
                                    <h3 style={{ float: 'right' }}>R$ 4.000,00</h3>
                                </Col>
                            </Row>
                            <Row className='show-grid' >
                                <Col md={3}>
                                    <h4>Novo Negócio</h4>
                                    <Panel footer={
                                        <div>
                                            <Glyphicon glyph="glyphicon glyphicon-chevron-left" />
                                            <Glyphicon style={{ float: 'right', color: '#5bc0de' }} glyph="glyphicon glyphicon-chevron-right" />
                                        </div>
                                    }>
                                        <strong><span>Projeto X</span></strong><br />
                                        <span>Consultiva</span><br />
                                        <span>Maria</span><br />
                                        <span>R$ 2.000,00</span><br />
                                    </Panel>
                                </Col>
                                <Col md={3}>
                                    <h4>Orçamento enviado</h4>
                                    <Panel footer={
                                        <div>
                                            <Glyphicon style={{ color: '#5bc0de' }} glyph="glyphicon glyphicon-chevron-left" />
                                            <Glyphicon style={{ float: 'right', color: '#5bc0de' }} glyph="glyphicon glyphicon-chevron-right" />
                                        </div>
                                    }>
                                        <strong><span>Projeto 01</span></strong><br />
                                        <span>Consultiva</span><br />
                                        <span>João</span><br />
                                        <span>R$ 1.000,00</span><br />
                                    </Panel>
                                    <Panel footer={
                                        <div>
                                            <Glyphicon style={{ color: '#5bc0de' }} glyph="glyphicon glyphicon-chevron-left" />
                                            <Glyphicon style={{ float: 'right', color: '#5bc0de' }} glyph="glyphicon glyphicon-chevron-right" />
                                        </div>
                                    }>
                                        <strong><span>Projeto 02</span></strong><br />
                                        <span>Consultiva</span><br />
                                        <span>João</span><br />
                                        <span>R$ 1.000,00</span><br />
                                    </Panel>
                                </Col>
                                <Col md={3}>
                                    <h4>Follow up</h4>
                                </Col>
                                <Col md={3}>
                                    <h4>Em fechamento</h4>
                                </Col>
                            </Row>
                        </Panel>
                    </Col>
                </Row>
            </Grid >
        )
    }
}