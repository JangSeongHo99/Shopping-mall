import React, {useState, useEffect} from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss'
import { CSSTransition } from 'react-transition-group';

function Detail(props){
	let [alert, alert변경] = useState(true);
	
	let [누른탭, 누른탭변경] = useState(0);
	let [스위치, 스위치변경] = useState(false);
	useEffect(()=> {
		let 타이머 = setTimeout(()=>{alert변경(false)}, 2000);
		return ()=>{ clearTimeout(타이머) }
	}, [])
	
	let { id } = useParams();
	let history = useHistory();
	let match = props.shoes.find(function(shoe){
		return shoe.id == id
	})
	
	for(let shoe of props.shoes) {
		if (shoe.id == id) {
			match = shoe.id; 
			break;
		}
	}
	return(
		<div className="container">
			{
				alert === true
				? <Alert/>
				: null
			}
			<div className="row">
				<div className="col-md-6">
					<img src={"https://codingapple1.github.io/shop/shoes"+(match+1)+".jpg"} width="100%"/>
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5">{props.shoes[match].title}</h4>
					<p>{props.shoes[match].content}</p>
					<p>{props.shoes[match].price}</p>
					
					<Info 재고 = {props.재고}></Info>
					<button className="btn btn-danger" onClick={()=>{props.재고변경()}}>주문하기</button>
					<button className="btn btn-danger" onClick={()=>{
						history.goBack();	
						
					}}>뒤로가기</button>
				</div>
			</div>
			
			<Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
  				<Nav.Item>
    				<Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0)}}>Active</Nav.Link>
				</Nav.Item>
				<Nav.Item>
    				<Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1)}}>Option 2</Nav.Link>
				</Nav.Item>
			</Nav>
			<CSSTransition in = {스위치} classNames="wow" timeout={500}>
				<TapContent 누른탭 = {누른탭} 스위치변경 = {스위치변경}/>
			</CSSTransition>
		</div>
	)
}

function Alert() {
	return (
		<div className="my-alert2">
			<p>재고가 얼마 남지 않았습니다</p>
		</div>
	)
}

function TapContent(props){
	useEffect(()=>{
		props.스위치변경(true);
	})
	if(props.누른탭 == 0){
		return <div>0번째 내용입니다.</div>   	
	} else if(props.누른탭 == 1){
		return <div>1번째 내용입니다.</div>
	} else {
		return <div>2번째 내용입니다.</div>
	}
}

function Info(props){
	return (
		<p>재고 : {props.재고[0]}</p>
	)
}
export default Detail;