import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './../../components/navbar';
import Atividade from './../atividade/container';
import Empresa from './../empresa/container';
import Contato from './../contato/container';
import Negocio from './../negocio/container';

import Detalhe from './../empresa/detalhes.container';

export default class extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />

                    <Switch>
                        <Route path="/atividade" component={Atividade} exact />
                        <Route path="/empresa" component={Empresa} exact />
                        <Route path="/contato" component={Contato} exact />
                        <Route path="/negocio" component={Negocio} exact />

                        <Route path="/empresa/detalhes" component={Detalhe} exact />
            
                    </Switch>
                </div>
            </Router>
        )
    }
}

