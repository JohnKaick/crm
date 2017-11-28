import React from 'react';

import { Grid, Row, Col, Panel, Button, Glyphicon, Tabs, Tab, ListGroup, ListGroupItem } from 'react-bootstrap';


export default class extends React.Component {

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

                    <Col md={3}>
                        <Panel>
                            <h2>Ativati</h2>
                            <span style={{ color: 'gray' }}>CNPJ</span><br />
                            <span>00.000.000-0000/00</span><br /><br />
                            <span style={{ color: 'gray' }}>Endereço</span><br />
                            <span>Teste</span><br /><br />
                            <span style={{ color: 'gray' }}>Categoria</span><br />
                            <span>Teste</span><br /><br />
                            <span style={{ color: 'gray' }}>Origem</span><br />
                            <span>Teste</span><br /><br />
                            <span style={{ color: 'gray' }}>Telefone</span><br />
                            <span>Teste</span><br /><br />
                            <span style={{ color: 'gray' }}>Website</span><br />
                            <span>Teste</span><br /><br />
                            <span style={{ color: 'gray' }}>Respónsavel</span><br />
                            <span>Teste</span><br /><br />
                            <span style={{ color: 'gray' }}>Descrição</span><br />
                            <span>Teste</span><br /><br />
                            <Button bsStyle="warning"><Glyphicon glyph="glyphicon glyphicon-trash" /> Excluir</Button>
                            <Button bsStyle="info" style={{ float: 'right' }}><Glyphicon glyph="glyphicon glyphicon-edit" /> Editar</Button>
                        </Panel>
                    </Col>

                    <Col md={9}>
                        <Panel>
                            <h4>Informações</h4>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Histórico">
                                    <br />
                                    <Panel style={{ cursor: 'pointer' }} onClick={() => { }}>
                                        <Col md={3}>
                                            <span style={{ color: 'gray' }}>Categoria</span><br />
                                            <span>Reunião</span>
                                        </Col>
                                        <Col md={3}>
                                            <span style={{ color: 'gray' }}>Negócio</span><br />
                                            <span>Crm</span>
                                        </Col>
                                        <Col md={3}>
                                            <span style={{ color: 'gray' }}>Empresa/Contato</span><br />
                                            <span>Ativati</span>
                                        </Col>
                                        <Col md={3}>
                                            <span style={{ float: 'right' }}>03/11/2017</span><br />
                                            <span style={{ float: 'right' }}>John Kaick</span>
                                        </Col>
                                        <Col md={12}>
                                            <br />
                                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica.</p>
                                        </Col>
                                    </Panel>
                                </Tab>
                                <Tab eventKey={2} title="Negócios">
                                    <br />
                                    <ListGroup>
                                        <ListGroupItem href="#/empresa/detalhes">
                                            <span>Projeto X</span>
                                            <span style={{ float: 'right' }}>03/11/2017</span><br />
                                        </ListGroupItem>
                                        <ListGroupItem href="#/empresa/detalhes">
                                            <span>Projeto Y</span>
                                            <span style={{ float: 'right' }}>03/11/2017</span><br />
                                        </ListGroupItem>
                                        <ListGroupItem href="#/empresa/detalhes">
                                            <span>Projeto W</span>
                                            <span style={{ float: 'right' }}>03/11/2017</span><br />
                                        </ListGroupItem>
                                    </ListGroup>
                                </Tab>
                                <Tab eventKey={3} title="Contatos">
                                    <br />
                                    <ListGroup>
                                        <ListGroupItem href="#/empresa/detalhes">
                                            <span>João</span>
                                            <span style={{ float: 'right' }}>Comprador</span><br />
                                        </ListGroupItem>
                                        <ListGroupItem href="#/empresa/detalhes">
                                            <span>Maria</span>
                                            <span style={{ float: 'right' }}>Gerente</span><br />
                                        </ListGroupItem>
                                    </ListGroup>
                                </Tab>
                            </Tabs>
                        </Panel>
                    </Col>

                </Row>
            </Grid>
        )
    }
}