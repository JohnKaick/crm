import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './../components/navbar';
import { Empresa, DetalhesEmpresa, CadastrarEmpresa } from './../empresa';
import Painel from './../painel/container';


export default class extends React.Component {
    render() {

        return (
            <div>
                <Navbar />
                <Router>
                    <Switch>
                        <Route path="/empresa" render={() => (
                            <div>
                                <Route path="/empresa" component={Empresa} exact />
                                <Route path="/empresa/:empresaId/detalhes" component={DetalhesEmpresa} />
                                <Route path="/empresa/cadastrar" component={CadastrarEmpresa} />
                            </div>
                        )} />
                        <Redirect to='/painel' component={Painel} exact />
                    </Switch>
                </Router>
            </div>
        )
    }
}

