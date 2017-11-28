import React from 'react';

import Component from './cadastrar.component';

import { cadastrar } from './../../module/api/empresa'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            nome: '',
            cnpj: '',
            endereco: '',
            categoria: '',
            origem: '',
            telefone: '',
            website: '',
            responsavel: '',
            descricao: ''
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    onSalvar() {
        cadastrar({
            nome: this.state.nome,
            cnpj: this.state.cnpj,
            endereco: this.state.endereco,
            categoria: this.state.categoria,
            origem: this.state.origem,
            telefone: this.state.telefone,
            website: this.state.website,
            responsavel: this.state.responsavel,
            descricao: this.state.descricao
        }).then((r) => {
            this.setState({
                nome: '',
                cnpj: '',
                endereco: '',
                categoria: '',
                origem: '',
                telefone: '',
                website: '',
                responsavel: '',
                descricao: ''
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Component
                {...this.props}
                handleChange={this.handleChange}
            />
        )
    }
}