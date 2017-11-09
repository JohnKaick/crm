import React from 'react';

import Component from './component';


export default class empresa extends React.Component {

    constructor(props) {
        super(props)
        this.showCadastrar = this.showCadastrar.bind(this)
        this.state = {
            showCadastrarResult: false,
            empresas: [],
        }
    }

    showCadastrar() {
        this.setState({
            showCadastrarResult: !this.state.showCadastrarResult,
        })
    }

    render() {
        return (
            <Component
                {...this.state}
                {...this.props}
                showCadastrar={this.showCadastrar}
            />
        )
    }
}