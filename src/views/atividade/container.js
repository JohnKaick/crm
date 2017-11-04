import React from 'react';

import { Grid, Row, Col, Panel, Button, Glyphicon } from 'react-bootstrap';

import styles from './../../content/app.css';


export default class Atividade extends React.Component {
    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Panel onClick={() => { }}>
                        <span>Atividades</span>
                        <Button bsStyle="link" bsSize="xs" style={{ float: 'right' }}><Glyphicon glyph="glyphicon glyphicon-plus" /> Adicionar</Button>
                    </Panel>
                </Row>
                <Row className="show-grid">
                    <Panel className={styles.gasparbutton} onClick={() => { }}>
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
                            <span style={{ float: 'right' }}>03/11/2017</span>
                        </Col>
                        <Col md={12}>
                            <br />
                            <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica.</p>
                        </Col>
                    </Panel>
                </Row>
            </Grid>
        )
    }
}