import React from 'react';
import { Atividades, Contatos, Negocios } from './../components/detalhes'
import { Grid, Row, Col, Panel, Button, Glyphicon, Tabs, Tab } from 'react-bootstrap';

const styles = {
    span: { color: 'grey' },
    buttonEditar: { float: 'right' }
}

const ListItem = ({ titulo, valor }) => (
    <p>
        <span style={styles.span}>{titulo}</span> <br /> {valor}
    </p>
)

export default props => (
    <Grid>
        <Row className="show-grid">

            <Col md={3}>
                <Panel>
                    <h2>{props.empresa.nome}</h2>
                    <ListItem titulo="CNPJ" valor={props.empresa.cnpj || '---'} />
                    <ListItem titulo="Endereço" valor={props.empresa.endereco || '---'} />
                    <ListItem titulo="Categoria" valor={props.empresa.categoria || '---'} />
                    <ListItem titulo="Origem" valor={props.empresa.origem || '---'} />
                    <ListItem titulo="Telefone" valor={props.empresa.telefone || '---'} />
                    <ListItem titulo="Website" valor={props.empresa.website || '---'} />
                    <ListItem titulo="Responsável" valor={props.empresa.resposanvel || '---'} />
                    <ListItem titulo="descrição" valor={props.empresa.descricao || '---'} />
                    <Button bsStyle="warning"><Glyphicon glyph="glyphicon glyphicon-trash" /> Excluir</Button>
                    <Button bsStyle="info" style={styles.buttonEditar}><Glyphicon glyph="glyphicon glyphicon-edit" /> Editar</Button>
                </Panel>
            </Col>

            <Col md={9}>
                <Panel>
                    <h4>Histórico</h4>
                    <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Histórico">
                            <Atividades atividades={props.empresa.atividades || []} />
                        </Tab>
                        <Tab eventKey={2} title="Negócios">
                            <Negocios negocios={props.empresa.negocios  || []} />
                        </Tab>
                        <Tab eventKey={3} title="Contatos">
                            <Contatos contatos={props.empresa.contatos  || []} />
                        </Tab>
                    </Tabs>
                </Panel>
            </Col>

        </Row>
    </Grid>
)
