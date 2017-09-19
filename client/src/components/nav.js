import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, DropdownButton, MenuItem, CollapsibleNav} from 'react-bootstrap';

class NavBarHeader extends Component {
	render() {
		return (
			<Navbar>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Bucket List</a>
			      </Navbar.Brand>
			    </Navbar.Header>
			    <Nav>
			      <NavItem eventKey={1} href="#">Sign in</NavItem>
			      <NavItem eventKey={2} href="#">Sign up </NavItem>
			      <NavDropdown eventKey={3} title="Fun stuff" id="basic-nav-dropdown">
			        <MenuItem eventKey={3.1}>Action</MenuItem>
			        <MenuItem eventKey={3.2}>Another action</MenuItem>
			        <MenuItem eventKey={3.3}>Something else here</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.4}>Separated link</MenuItem>
			      </NavDropdown>
			    </Nav>
			  </Navbar>
		)
	}
}

export default NavBarHeader;