import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import history from './../../module/history';

import Navbar from './../../components/navbar';
import Atividade from './../atividade/container';
import { Empresa, DetalhesEmpresa } from './../empresa';
import { Contato, DetalhesContato } from './../contato';

import Negocio from './../negocio/container';


export default class extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/atividade" component={Atividade} exact />
                        <Route path="/empresa" render={() => (
                            <div>
                                <Route path="/empresa" component={Empresa} exact />
                                <Route path="/empresa/:empresaId/detalhes" component={DetalhesEmpresa} />
                            </div>
                        )} />
                        <Route path="/contato" render={() => (
                            <div>
                                <Route path="/contato" component={Contato} exact />
                                <Route path="/contato/:contatoId/detalhes" component={DetalhesContato} />
                            </div>
                        )} />
                        <Route path="/negocio" component={Negocio} exact />
                        <Redirect from='*' to='/painel' exact />
                    </Switch>
                </Router>
            </div>
        )
    }
}

