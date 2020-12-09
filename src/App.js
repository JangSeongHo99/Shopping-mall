import './App.css';
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from 'react-bootstrap';
import React, {useState} from 'react';
import Data from "./data.js";
import Detail from "./Detail.js"
import axios from 'axios';

import { Link,Route,Switch } from 'react-router-dom';

function App() {
	
	let [shoes, shoes변경] = useState(Data);
	let [alert, alert변경] = useState(true);
  return (
    <div className="App">
		<Navbar bg="light" expand="lg">
		  <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>	
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ml-auto">
			  <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
				<Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
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
		<Switch>
		<Route exact path="/">
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
						shoes.map((shoe, index)=>{
							return(
								<Shoes shoe={shoe} key={index}></Shoes>
								)
							}
						)
					}
				</div>
				<button className="btn btn-primary" onClick={()=>{
												return (
							<Alerta></Alerta>
						)
						axios.get('https://codingapple1.github.io/shop/data2.json')
						.then((result)=>{
							alert변경(false);
							shoes변경([...shoes, ...result.data])
						})
						.catch(()=>{
							alert변경(false);
							console.log('실패');
						})
					}}>더보기</button>
			</div>
		 </Route>
		 <Route path="/detail/:id">
			<Detail shoes = {shoes}/>
		 </Route>
		 <Route path="/:id">
		 	<div>아무거나</div>
		  </Route>
		</Switch>
    </div>
  );
}

function Shoes(props) {
	return(
		<div className="col-md-4">
			<img src = {"https://codingapple1.github.io/shop/shoes"+(props.shoe.id+1)+".jpg"} width="100%"/>
			<h4>{ props.shoe.title }</h4>
			<p>{ props.shoe.content } & { props.shoe.price}</p>
		</div>
	)
}

function Alerta() {
	return(
		<div className="my-alert">
			<p>재고가 얼마 남지 않았습니다</p>
		</div>
	)
}
export default App;
