import React from 'react';

import { ListGroupItem, ListGroup } from 'react-bootstrap';

const styles = {
    div: { marginTop: '5px' },
    spanRight: { float: 'right' }
}

export default props => (
    <div style={styles.div}>
        {props.contatos.length == 0 ?
            <h3>Nenhum contato realizado.</h3>
            :
            (props.contatos).map((c, i) => {
                <ListGroup>
                    <ListGroupItem>
                        <span>{c.nome}</span>
                        <span style={styles.spanRight}>{new Date(c.data).toLocaleDateString()}</span><br />
                    </ListGroupItem>
                </ListGroup>
            })
        }
    </div>
)

