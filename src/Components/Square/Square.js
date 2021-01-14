import React from 'react';
import './Square.css';

const Square = ({id, onButtonClick, val, winner}) => {
	const myFunc = (winner === "") ? () => onButtonClick(id) : null;

	return(
		<div className="square">
		{
			(val === null) ? <button className="sq_btn" type="button" onClick={myFunc} id={id}></button>
			: <button className="sq_btn" type="button" onClick={myFunc} id={id}>{val}</button>
		}
		</div>
	)
}

export default Square;