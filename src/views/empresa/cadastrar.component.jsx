import React from 'react';

import { Grid, Row, Col, ControlLabel, FormGroup, FormControl, Glyphicon, ButtonGroup, Button } from 'react-bootstrap';

export default (props) => {
    const {
        showCadastrar, nome, cnpj, endereco, categoria, origem, telefone, website, responsavel, descricao,
        handleChange, onSalvar
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
                                        value={nome}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>CNPJ</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={cnpj}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Endereço completo</ControlLabel>
                            <FormControl
                                type="text"
                                value={endereco}
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <Row className="show-grid">
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Categoria</ControlLabel>
                                    <FormControl componentClass="select">
                                        <option value={"Cliente em potencial"} onChange={handleChange}>Cliente em potencial</option>
                                        <option value={"Cliente efetivo"} onChange={handleChange}>Cliente efetivo</option>
                                        <option value={"Concorrente"} onChange={handleChange}>Concorrente</option>
                                        <option value={"Fornecedor"} onChange={handleChange}>Fornecedor</option>
                                        <option value={"Parceiro"} onChange={handleChange}>Parceiro</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Jornada</ControlLabel>
                                    <FormControl componentClass="select" >
                                        <option value={"Conhece"} onChange={handleChange}>Conhece</option>
                                        <option value={"Gosta"} onChange={handleChange}>Gosta</option>
                                        <option value={"Conectado"} onChange={handleChange}>Conectado</option>
                                        <option value={"Vive"} onChange={handleChange}>Vive</option>
                                    </FormControl>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Origem</ControlLabel>
                                    <FormControl componentClass="select" >
                                        <option value={"Evento"} onChange={handleChange}>Evento</option>
                                        <option value={"Indicação"} onChange={handleChange}>Indicação</option>
                                        <option value={"Site"} onChange={handleChange}>Site</option>
                                        <option value={"Outros"} onChange={handleChange}>Outros</option>
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
                                        value={telefone}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Website</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={website}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>Responsável</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={responsavel}
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <ControlLabel>Descrição</ControlLabel>
                            <FormControl
                                type="text"
                                componentClass="textarea"
                                value={descricao}
                                onChange={handleChange}
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