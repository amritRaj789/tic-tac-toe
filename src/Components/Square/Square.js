import React from 'react';
import './Square.css';

const Square = ({id, onButtonClick, val, glow}) => {
	let myStyle = null;
	if(glow)
		myStyle = {
			"background-color": "#e41f7b",
			color: "black",

		};
	return(
		<div className="square">
			<button className="sq_btn" type="button" style={myStyle} onClick={() => onButtonClick(id)} id={id}>{val}</button>
		</div>
	)
}



export default Square;