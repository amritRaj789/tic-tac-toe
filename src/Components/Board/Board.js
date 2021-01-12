import React, {Component} from 'react';
import Square from '../Square/Square.js';
import './Board.css';

class Board extends Component {

	constructor(props){
		super(props);
	}
	
	render(){
		const {onButtonClick, squares} = this.props;
		return(
			<div className='board'>
				<div className="row1">
					<Square onButtonClick={onButtonClick} id={0} val={squares[0]}/>
					<Square onButtonClick={onButtonClick} id={1} val={squares[1]}/>
					<Square onButtonClick={onButtonClick} id={2} val={squares[2]}/>
				</div>
				<div className="row2">
					<Square onButtonClick={onButtonClick} id={3} val={squares[3]}/>
					<Square onButtonClick={onButtonClick} id={4} val={squares[4]}/>
					<Square onButtonClick={onButtonClick} id={5} val={squares[5]}/>
				</div>
				<div className="row3">
					<Square onButtonClick={onButtonClick} id={6} val={squares[6]}/>
					<Square onButtonClick={onButtonClick} id={7} val={squares[7]}/>
					<Square onButtonClick={onButtonClick} id={8} val={squares[8]}/>
				</div>
			</div>
		)
	}
	
}

export default Board;