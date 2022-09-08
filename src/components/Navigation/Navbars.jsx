import React from 'react'; 
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tilt from 'react-parallax-tilt';
import logo from './../../assets/images/logo.svg';
import {withRouter} from "react-router";


const Navbars = (props) => {
	return (

		<Navbar collapseOnSelect expand="lg" >
			<Navbar.Brand href="/">
				<Tilt className="Tilt br2 shadow-2" options={{ max: 100 }}  >
				<img style={{ paddingTop: '4px', width:150, height:150 }} src={logo} />
				</Tilt>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
				</Nav>
				<Nav>
				    <Nav.Link style={{fontSize:'16px'}} href="/">Home</Nav.Link>
					<Nav.Link style={{fontSize:'16px'}} href="/testings">Tests</Nav.Link>
					<Nav.Link style={{fontSize:'16px'}} href="#" target="_blank">Source Code</Nav.Link>
					<Nav.Link style={{fontSize:'16px'}} href="https://www.giskard.ai/" target="_blank">Giskard</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		);
}

export default withRouter(Navbars);
