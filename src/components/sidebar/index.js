import React from 'react';

import { Link } from 'react-router-dom'

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Drawer open={true} >
                    <AppBar title="Menu" />

                    <MenuItem primaryText="Painel"
                        leftIcon={<FontIcon className="fa fa-home" />}
                        as={Link}
                        to="/" />

                    <MenuItem primaryText="Tarefa"
                        leftIcon={<FontIcon className="fa fa-calendar" />}
                        as={Link}
                        to="/empresa" />

                    <MenuItem primaryText="Empresa"
                        leftIcon={<FontIcon className="fa fa-building" />}
                        as={Link}
                        to="/empresa" />

                    <MenuItem primaryText="Contato"
                        leftIcon={<FontIcon className="fa fa-id-card" />}
                        as={Link}
                        to="/contato" />

                    <MenuItem primaryText="Negócio"
                        leftIcon={<FontIcon className="fa fa-briefcase" />}
                        as={Link}
                        to="/negocio" />

                    <Divider />

                    <MenuItem primaryText="Perfil"
                        leftIcon={<FontIcon className="fa fa-cog" />}
                        as={Link}
                        to="/perfil" />
                    <MenuItem primaryText="Sair"
                        leftIcon={<FontIcon className="fa fa-power-off" />}
                        as={Link}
                        to="/" />
                </Drawer>
            </div>
        );
    }
}