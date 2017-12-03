import React from 'react';

import { ListGroupItem, ListGroup } from 'react-bootstrap';

const styles = {
    div: { marginTop: '5px' },
    spanRight: { float: 'right' }
}

export default props => (
    <div style={styles.div}>
        {props.negocios.length == 0 ?
            <h3>Nenhum negócio realizado.</h3>
            :
            (props.negocios).map((n, i) => {
                <ListGroup>
                    <ListGroupItem>
                        <span>{n.nome}</span>
                        <span style={styles.spanRight}>{new Date(n.data).toLocaleDateString()}</span><br />
                    </ListGroupItem>
                </ListGroup>
            })
        }
    </div>
) 