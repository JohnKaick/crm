import React from 'react';
import { withRouter } from 'react-router-dom'

import Component from './detalhes.component'

import { obter, editar } from './../../module/api/empresa'

export default class extends React.Component {

    constructor(props) {
        super(props)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onSalvar = this.onSalvar.bind(this)
        this.state = {
            showModal: false,
            empresaId: null,
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

    open() {
        const empresaId = this.props.empresaId
        obter(empresaId).then((emp) => {
            let empresa = emp.data
            this.setState({
                empresaId: empresa._id || empresaId,
                nome: empresa.nome || '',
                cnpj: empresa.cnpj || '',
                endereco: empresa.endereco || '',
                categoria: empresa.categoria || '',
                origem: empresa.origem || '',
                telefone: empresa.telefone || '',
                website: empresa.website || '',
                responsavel: empresa.responsavel || '',
                descricao: empresa.descricao || '',
                showModal: true
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    close() {
        this.setState({ showModal: false })
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    onSalvar() {
        editar({
            empresaId: this.state.empresaId,
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
            this.close()
        }).catch((err) => {
            console.log(err)
        })
    }


    render() {
        return (
            <Component
                {...this.state}
                {...this.props}
                open={this.open}
                close={this.close}
                handleChange={this.handleChange}
                onSalvar={this.onSalvar}
            />
        )
    }
}