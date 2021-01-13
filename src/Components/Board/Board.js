import React, {Component} from 'react';
import Square from '../Square/Square.js';
import './Board.css';

class Board extends Component {

	constructor(props){
		super(props);
	}
	
	render(){
		const {onButtonClick, squares, winner} = this.props;
		// const styleObj = (winner==="") ? {visibility: 'visible'} : {visibility: 'hidden'};
		return(
			<div className='board'>
				<div className="row1">
					<Square onButtonClick={onButtonClick} id={0} val={squares[0]} winner={winner}/>
					<Square onButtonClick={onButtonClick} id={1} val={squares[1]} winner={winner}/>
					<Square onButtonClick={onButtonClick} id={2} val={squares[2]} winner={winner}/>
				</div>
				<div className="row2">
					<Square onButtonClick={onButtonClick} id={3} val={squares[3]} winner={winner}/>
					<Square onButtonClick={onButtonClick} id={4} val={squares[4]} winner={winner}/>
					<Square onButtonClick={onButtonClick} id={5} val={squares[5]} winner={winner}/>
				</div>
				<div className="row3">
					<Square onButtonClick={onButtonClick} id={6} val={squares[6]} winner={winner}/>
					<Square onButtonClick={onButtonClick} id={7} val={squares[7]} winner={winner}/>
					<Square onButtonClick={onButtonClick} id={8} val={squares[8]} winner={winner}/>
				</div>
			</div>
		)
	}
	
}

export default Board;