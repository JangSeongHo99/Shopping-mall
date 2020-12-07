import React, {useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss'

function Detail(props){
	
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
			<div className="my-alert2">
				<p>재고가 얼마 남지 않았습니다</p>
			</div>
			<div className="row">
				<div className="col-md-6">
					<img src={"https://codingapple1.github.io/shop/shoes"+(match+1)+".jpg"} width="100%"/>
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5">{props.shoes[match].title}</h4>
					<p>{props.shoes[match].content}</p>
					<p>{props.shoes[match].price}</p>
					<button className="btn btn-danger" onClick={()=>{console.log(match)}}>주문하기</button>
					<button className="btn btn-danger" onClick={()=>{
						history.goBack();	
						
					}}>뒤로가기</button>
				</div>
			</div>
		</div>
	)
}

export default Detail;