import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './../../components/navbar';
import Atividade from './../atividade/container'

export default class extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />

                    <Switch>
                        <Route path="/atividade" component={Atividade} exact />

                    </Switch>
                </div>
            </Router>
        )
    }
}

