import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';
import {Link} from "react-router-dom";

export default class Appbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggle = () =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    };


    // Este componente no tiene mucha logica
    // solo recibe el props que le pasamos y lo mostramos en el  appbar
    // tambien esta configurado las rutas de la aplicacion
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">{ this.props.title }</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to={'/'}>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to={'/newpost'}>New Post</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
