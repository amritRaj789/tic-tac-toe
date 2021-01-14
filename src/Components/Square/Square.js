import React from 'react';
import './Square.css';

const Square = ({id, onButtonClick, val, winner}) => {
	return(
		<div className="square">
		{
			(val === null) ? <button className="sq_btn" type="button" onClick={() => onButtonClick(id)} id={id}></button>
			: <button className="sq_btn" type="button" onClick={() => onButtonClick(id)} id={id}>{val}</button>
		}
		</div>
	)
}

export default Square;