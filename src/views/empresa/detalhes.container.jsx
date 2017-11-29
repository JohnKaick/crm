import React from 'react';
import { withRouter } from 'react-router-dom'

import Component from './detalhes.component'

import { obter, deletar } from './../../module/api/empresa'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onDeletar = this.onDeletar.bind(this)
        this.state = {
            open: false,
            empresaId: null,
            empresa: {}
        }
    }

    componentDidMount() {
        const empresaId = this.props.math.params.empresaId
        obter(empresaId).then((emp) => {
            let empresa = emp.data
            this.setState({
                empresaId: empresa._id || empresaId,
                empresa: empresa || {}
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    onDeletar() {
        deletar(this.state.empresaId).then((r) => {
            this.props.history.push('/empresa');
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        return (
            <Component
                {...this.state}
                {...this.props}
                onDeletar={this.onDeletar}
            />
        )
    }
}