import React from 'react';

import { Grid, Row, Col, Panel, Button, Glyphicon } from 'react-bootstrap';

export default class Atividade extends React.Component {

    constructor(props) {
        super(props)
        this.toggleHover = this.toggleHover.bind(this)
        this.state = { hover: false }
    }

    toggleHover = (posicao) => {
        this.setState({
            hover: !this.state.hover,
        })
    }

    render() {

        var linkStyle;
        if (this.state.hover) {
            linkStyle = {
                borderColor: '#46b8da',
                cursor: 'pointer',
                transform: 'translateY(-5px)',
                boxShadow: '1px 5px 3px 0px #ededed'
            }
        } else {
            linkStyle = {
                cursor: 'pointer'
            }
        }

        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}>
                        <Panel onClick={() => { }}>
                            <span style={{ margin: '0', fontSize: '18px' }}>Atividades</span>
                            <a bsStyle="link" style={{ float: 'right', cursor: 'pointer', color: '#5bc0de' }} onClick={() => { }}><Glyphicon glyph="glyphicon glyphicon-plus" /> ADICIONAR</a>
                        </Panel>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}>
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
                    </Col>
                </Row>
            </Grid>
        )
    }
}