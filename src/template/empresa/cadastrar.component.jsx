import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

export default props => (
    <Grid>
        <Row className="show-grid">
            <Col md={12}>
                <form>
                    <Row className="show-grid">
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>Nome</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={props.nome}
                                    onChange={props.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <ControlLabel>CNPJ</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={props.cnpj}
                                    onChange={props.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <ControlLabel>Endereço completo</ControlLabel>
                        <FormControl
                            type="text"
                            value={props.endereco}
                            onChange={props.handleChange}
                        />
                    </FormGroup>
                    <Row className="show-grid">
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Categoria</ControlLabel>
                                <FormControl componentClass="select">
                                    <option value={"Cliente em potencial"} onChange={props.handleChange}>Cliente em potencial</option>
                                    <option value={"Cliente efetivo"} onChange={props.handleChange}>Cliente efetivo</option>
                                    <option value={"Concorrente"} onChange={props.handleChange}>Concorrente</option>
                                    <option value={"Fornecedor"} onChange={props.handleChange}>Fornecedor</option>
                                    <option value={"Parceiro"} onChange={props.handleChange}>Parceiro</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Jornada</ControlLabel>
                                <FormControl componentClass="select" >
                                    <option value={"Conhece"} onChange={props.handleChange}>Conhece</option>
                                    <option value={"Gosta"} onChange={props.handleChange}>Gosta</option>
                                    <option value={"Conectado"} onChange={props.handleChange}>Conectado</option>
                                    <option value={"Vive"} onChange={props.handleChange}>Vive</option>
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Origem</ControlLabel>
                                <FormControl componentClass="select" >
                                    <option value={"Evento"} onChange={props.handleChange}>Evento</option>
                                    <option value={"Indicação"} onChange={props.handleChange}>Indicação</option>
                                    <option value={"Site"} onChange={props.handleChange}>Site</option>
                                    <option value={"Outros"} onChange={props.handleChange}>Outros</option>
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
                                    value={props.telefone}
                                    onChange={props.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Website</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={props.website}
                                    onChange={props.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <ControlLabel>Responsável</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={props.responsavel}
                                    onChange={props.handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <ControlLabel>Descrição</ControlLabel>
                        <FormControl
                            type="text"
                            componentClass="textarea"
                            value={props.descricao}
                            onChange={props.handleChange}
                        />
                    </FormGroup>
                    <ButtonGroup style={{ float: 'right' }}>
                        <Button bsStyle="info" type="submit" onClick={props.onSalvar}>
                            <Glyphicon glyph="glyphicon glyphicon-ok" />
                            <span> Salvar</span>
                        </Button>
                        <Button onClick={props.onCancelar}>
                            <Glyphicon glyph="glyphicon glyphicon-remove" />
                            <span> Cancelar</span>
                        </Button>
                    </ButtonGroup>
                </form>
            </Col>
        </Row>
    </Grid>
)
