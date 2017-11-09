import React from 'react';

import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

export default (props) => {
    const {
        showCadastrar, nome, cnpj, endereco, categoria, origem, telefone, website, responsavel, descricao,
        onChange, onChangeCategoria, onChangeJornada, onChangeOrigem, onSalvar
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
                                        name="nome"
                                        value={nome}
                                        onChange={onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>CNPJ</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="cnpj"
                                        value={cnpj}
                                        onChange={onChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Endereço completo</ControlLabel>
                            <FormControl
                                type="text"
                                name="endereco"
                                value={endereco}
                                onChange={onChange}
                            />
                        </FormGroup>
                        <Row className="show-grid">
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Categoria</ControlLabel>
                                    <FormControl componentClass="select">
                                        <option value={"Cliente em potencial"} onChange={onChangeCategoria}>Cliente em potencial</option>
                                        <option value={"Cliente efetivo"} onChange={onChangeCategoria}>Cliente efetivo</option>
                                        <option value={"Concorrente"} onChange={onChangeCategoria}>Concorrente</option>
                                        <option value={"Fornecedor"} onChange={onChangeCategoria}>Fornecedor</option>
                                        <option value={"Parceiro"} onChange={onChangeCategoria}>Parceiro</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Jornada</ControlLabel>
                                    <FormControl componentClass="select" >
                                        <option value={"Conhece"} onChange={onChangeJornada}>Conhece</option>
                                        <option value={"Gosta"} onChange={onChangeJornada}>Gosta</option>
                                        <option value={"Conectado"} onChange={onChangeJornada}>Conectado</option>
                                        <option value={"Vive"} onChange={onChangeJornada}>Vive</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Origem</ControlLabel>
                                    <FormControl componentClass="select" >
                                        <option value={"Evento"} onChange={onChangeOrigem}>Evento</option>
                                        <option value={"Indicação"} onChange={onChangeOrigem}>Indicação</option>
                                        <option value={"Site"} onChange={onChangeOrigem}>Site</option>
                                        <option value={"Outros"} onChange={onChangeOrigem}>Outros</option>
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
                                        name="telefone"
                                        value={telefone}
                                        onChange={onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Website</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="website"
                                        value={website}
                                        onChange={onChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Responsável</ControlLabel>
                                    <FormControl
                                        type="text"
                                        name="responsavel"
                                        value={responsavel}
                                        onChange={onChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Descrição</ControlLabel>
                            <FormControl
                                type="text"
                                componentClass="textarea"
                                name="descricao"
                                value={descricao}
                                onChange={onChange}
                            />
                        </FormGroup>
                        <ButtonGroup style={{ float: 'right' }}>
                            <Button bsStyle="info" type="submit" onClick={onSalvar}>
                                <Glyphicon glyph="glyphicon glyphicon-ok" />
                                <span> Salvar</span>
                            </Button>
                            <Button onClick={showCadastrar}>
                                <Glyphicon glyph="glyphicon glyphicon-remove" />
                                <span> Cancelar</span>
                            </Button>
                        </ButtonGroup>
                    </form>
                </Col>
            </Row>
        </div>
    )
}