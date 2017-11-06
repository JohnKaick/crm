import React from 'react';

import { Grid, Row, Col, Panel, ListGroupItem, Button, Glyphicon } from 'react-bootstrap';

export default class Contato extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Grid>

                <Row className="show-grid">
                    <Col md={12}>
                        <Panel onClick={() => { }}>
                            <span style={{ margin: '0', fontSize: '18px' }}>Contatos</span>
                            <a bsStyle="link" style={{ float: 'right', cursor: 'pointer', color: '#5bc0de' }} onClick={() => { }}><Glyphicon glyph="glyphicon glyphicon-plus" /> CADASTRAR</a>
                        </Panel>
                    </Col>
                </Row>

                <Row className='show-grid' >
                    <Col md={4} style={{ paddingBottom: '15px' }}>
                        <ListGroupItem header="John Pedrosa" style={{ cursor: 'pointer' }}>
                            <Button bsStyle="warning" style={{ float: 'right', 'border-radius': '20px' }}><Glyphicon glyph="glyphicon glyphicon-plus" /></Button>
                            <span style={{ color: 'gray' }}>Interativa Engenharia</span><br />
                            <span>(11) 3125-0000</span>
                        </ListGroupItem>
                    </Col>
                </Row>
            </Grid >
        )
    }
}