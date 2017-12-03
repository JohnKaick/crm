import React from 'react';

import { Col, Panel } from 'react-bootstrap';

const styles = {
    div: { marginTop: '5px' },
    span: { color: 'grey' },
    spanRight: { float: 'right' }
}

export default props => (
    <div style={styles.div}>
        {props.atividades.length == 0 ?
            <h3>Nenhuma atividade realizada.</h3>
            :
            (props.atividades).map((a, i) => {
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
    </div>
)