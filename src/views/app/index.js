import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Sidebar from './../../components/sidebar';
import Painel from './../painel/container'
import Tarefa from './../tarefa/container'
import Empresa from './../empresa/container'
import Contato from './../contato/container'
import Negocio from './../negocio/container'

export default class extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Sidebar />

                    <Switch>
                        <Route path="/" component={Painel} exact />
                        <Route path="/tarefa" component={Tarefa} exact />
                        <Route path="/empresa" component={Empresa} exact />
                        <Route path="/contato" component={Contato} exact />
                        <Route path="/negocio" component={Negocio} exact />

                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        )
    }
}

