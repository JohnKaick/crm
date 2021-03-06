import React from 'react';

import { Link, NavLink } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span>CRM</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/painel"><i class="fa fa-home" aria-hidden="true"></i> Painel</NavItem>
                        <NavItem eventKey={2} href="/atividade"><i class="fa fa-calendar" aria-hidden="true"></i> Atividade</NavItem>
                        <NavItem eventKey={3} href="/empresa"><i class="fa fa-building" aria-hidden="true"></i> Empresa</NavItem>
                        <NavItem eventKey={4} href="/contato"><i class="fa fa-id-card" aria-hidden="true"></i> Contato</NavItem>
                        <NavItem eventKey={5} href="/negocio"><i class="fa fa-briefcase" aria-hidden="true"></i> Negócio</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={6} href="#"><i class="fa fa-address-book-o" aria-hidden="true"></i> Perfil</NavItem>
                        <NavItem eventKey={7} href="#"><i class="fa fa-power-off" aria-hidden="true"></i> Sair</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}