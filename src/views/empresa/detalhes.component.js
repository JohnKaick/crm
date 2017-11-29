import React from 'react';

import { Grid, Row, Col, Panel, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

const styles = {
    span: { color: 'grey' },
    spanRight: { float: 'right' },
    buttonEditar: { float: 'right' }
}

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={styles.span}>{titulo}</span> <br /> {valor}
    </p>
)

export default (props) => {

    const {
        empresa, onDeletar
    } = props

    return (
        <Grid>
            <Row className="show-grid">

                <Col md={3}>
                    <Panel>
                        <h2>{empresa.nome}</h2>
                        <ListItem titulo="CNPJ" valor={empresa.cnpj || '---'} />
                        <ListItem titulo="Endereço" valor={empresa.endereco || '---'} />
                        <ListItem titulo="Categoria" valor={empresa.categoria || '---'} />
                        <ListItem titulo="Origem" valor={empresa.origem || '---'} />
                        <ListItem titulo="Telefone" valor={empresa.telefone || '---'} />
                        <ListItem titulo="Website" valor={empresa.website || '---'} />
                        <ListItem titulo="Responsável" valor={empresa.resposanvel || '---'} />
                        <ListItem titulo="descrição" valor={empresa.descricao || '---'} />
                        <Button bsStyle="warning"><Glyphicon glyph="glyphicon glyphicon-trash" /> Excluir</Button>
                        <Button bsStyle="info" style={styles.buttonEditar}><Glyphicon glyph="glyphicon glyphicon-edit" /> Editar</Button>
                    </Panel>
                </Col>

                <Col md={9}>
                    <Panel>
                        <h4>Informações</h4>
                        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                            <Tab eventKey={1} title="Histórico">
                                <br />
                                {empresa.atividades.lenght == 0 ?
                                    <p>Nenhuma atividade realizada.</p>
                                    :
                                    (empresa.atividades || []).map((a, i) => {
                                        <Panel>
                                            <Col md={3}>
                                                <span style={styles.span}>Categoria</span><br />
                                                <span>{a.categoria}</span>
                                            </Col>
                                            <Col md={3}>
                                                <span style={styles.span}>Negócio</span><br />
                                                <span>{a.negocio}</span>
                                            </Col>
                                            <Col md={3}>
                                                <span style={styles.span}>Empresa/Contato</span><br />
                                                <span>{a.empresa}</span>
                                            </Col>
                                            <Col md={3}>
                                                <span style={styles.spanRight}>{new Date(a.data).toLocaleDateString()}</span><br />
                                                <span style={styles.spanRight}>{a.usuario}</span>
                                            </Col>
                                            <Col md={12}>
                                                <br />
                                                <p>{a.descricao}</p>
                                            </Col>
                                        </Panel>
                                    })}

                            </Tab>
                            <Tab eventKey={2} title="Negócios">
                                <br />
                                {empresa.negocios.lenght == 0 ?
                                    <p>Nenhum negócio realizado.</p>
                                    :
                                    (empresa.negocios || []).map((n, i) => {
                                        <ListGroup>
                                            <ListGroupItem>
                                                <span>{n.nome}</span>
                                                <span style={styles.spanRight}>{new Date(n.data).toLocaleDateString()}</span><br />
                                            </ListGroupItem>
                                        </ListGroup>
                                    })
                                }
                            </Tab>
                            <Tab eventKey={3} title="Contatos">
                                <br />
                                {empresa.contatos.lenght == 0 ?
                                    <p>Nenhum contato realizado.</p>
                                    :
                                    (empresa.contatos || []).map((c, i) => {
                                        <ListGroup>
                                            <ListGroupItem>
                                                <span>{c.nome}</span>
                                                <span style={styles.spanRight}>{new Date(c.data).toLocaleDateString()}</span><br />
                                            </ListGroupItem>
                                        </ListGroup>
                                    })
                                }
                            </Tab>
                        </Tabs>
                    </Panel>
                </Col>

            </Row>
        </Grid>
    )
}