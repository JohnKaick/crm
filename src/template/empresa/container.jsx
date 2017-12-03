import React from 'react';
import { withRouter } from 'react-router-dom';
import Component from './component';

import { obterTodos } from './../../module/api/empresa'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onSelecionarEmpresa = this.onSelecionarEmpresa.bind(this)
        this.onCadastrar = this.onCadastrar.bind(this)
        this.state = {
            empresas: [],
        }
    }

    componentDidMount() {
        obterTodos().then((emp) => {
            this.setState({
                empresas: emp.data || []
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    onSelecionarEmpresa(empresa) {
        this.props.history.push('/empresa/' + empresa._id + '/detalhes');
    }

    onCadastrar() {
        this.props.history.push('/empresa/cadastrar');
    }

    render() {
        return (
            <Component
                {...this.props}
                {...this.state}
                onSelecionarEmpresa={this.onSelecionarEmpresa}
                onCadastrar={this.onCadastrar}
            />
        )
    }
}