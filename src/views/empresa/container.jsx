import React from 'react';

import Component from './component';

import { obterTodos } from './../../module/api/empresa'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.onSelecionarEmpresa = this.onSelecionarEmpresa.bind(this)
        this.showCadastrar = this.showCadastrar.bind(this)
        this.state = {
            showCadastrarResult: false,
            empresas: [],
        }
    }

    componentDidMount() {
        obterTodos().then((emp) => {
            this.setState({
                empresas: emp.data || []
            })
        })
    }

    onSelecionarEmpresa(empresa) {
        this.props.history.push('/empresa/' + empresa._id + '/detalhes');
    }

    showCadastrar() {
        this.setState({
            showCadastrarResult: !this.state.showCadastrarResult,
        })
    }

    render() {
        return (
            <Component
                {...this.props}
                {...this.state}
                onSelecionarEmpresa={this.onSelecionarEmpresa}
                showCadastrar={this.showCadastrar}
            />
        )
    }
}