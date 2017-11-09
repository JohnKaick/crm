import React from 'react';

import Component from './cadastrar.component';

import { cadastrar } from './../../module/api/empresa'

export default class empresa extends React.Component {

    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onChangeCategoria = this.onChangeCategoria.bind(this)
        this.onChangeJornada = this.onChangeJornada.bind(this)
        this.onChangeOrigem = this.onChangeOrigem.bind(this)
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

    onChange(e, { name, value, checked }) {
        this.setState({
            [name]: value || checked
        })
    }

    onChangeCategoria(e, { value }) {
        this.setState({
            'categoria': value
        })
    }

    onChangeJornada(e, { value }) {
        this.setState({
            'jornada': value
        })
    }

    onChangeOrigem(e, { value }) {
        this.setState({
            'origem': value
        })
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
            }).catch(err => {
                console.log(err)
            })
        })
    }

    render() {
        return (
            <Component
                {...this.state}
                {...this.props}
                onChange={this.onChange}
                onChangeCategoria={this.onChangeCategoria}
                onChangeJornada={this.onChangeJornada}
                onChangeOrigem={this.onChangeOrigem}
            />
        )
    }
}