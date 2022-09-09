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
					<Nav.Link style={{fontSize:'16px'}} href="https://www.loom.com/share/3c0d68e0e83245b0af3d6f3573597fd1" target="_blank">Tests</Nav.Link>
					<Nav.Link style={{fontSize:'16px'}} href="https://github.com/Gideon-12/Frontend_Millenium_Falcon.git" target="_blank">Frontend Code</Nav.Link>
					<Nav.Link style={{fontSize:'16px'}} href="https://github.com/Gideon-12/Backend_Millenium_Falcon-.git" target="_blank">Backend Code</Nav.Link>
					<Nav.Link style={{fontSize:'16px'}} href="https://www.giskard.ai/" target="_blank">Giskard</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>

		);
}

export default withRouter(Navbars);
