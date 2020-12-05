import './App.css';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';
import React, {useState} from 'react';
import Data from "./data.js";

function App() {
	
	let [shoes, shoes변경] = useState(Data);
	
  return (
    <div className="App">
		<Navbar bg="light" expand="lg">
		  <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>	
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
			  <Nav.Link href="#home">Home</Nav.Link>
			  <Nav.Link href="#link">Link</Nav.Link>
			  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			  </NavDropdown>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
		<Jumbotron className="background">
		  <h1>20% season OFF</h1>
		  <p>
			This is a simple hero unit, a simple jumbotron-style component for calling
			extra attention to featured content or information.
		  </p>
		  <p>
			<Button variant="primary">Learn more</Button>
		  </p>
		</Jumbotron>
		<div className="container">
			<div className="row">
				{
					shoes.map((shoe)=>{
						return(
							<Shoes shoe={shoe}></Shoes>
							)
						}
					)
				}
			</div>
		</div>
    </div>
  );
}

function Shoes(props) {
	var shoe_url = "https://codingapple1.github.io/shop/shoes" + (props.shoe.id+1) + ".jpg";
	return(
		<div className="col-md-4">
			<img src = {shoe_url} width="100%"/>
			<h4>{ props.shoe.title }</h4>
			<p>{ props.shoe.content } & { props.shoe.price}</p>
		</div>
	)
}
export default App;
