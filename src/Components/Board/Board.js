import React, {Component} from 'react';
import Square from '../Square/Square.js';
import './Board.css';

class Board extends Component {

	render(){
		const {onButtonClick, squares, glow} = this.props;
		return(
			<div className='board'>
				<div className="row1">
					<Square onButtonClick={onButtonClick} glow={glow[0]} id={0} val={squares[0]} />
					<Square onButtonClick={onButtonClick} glow={glow[1]} id={1} val={squares[1]} />
					<Square onButtonClick={onButtonClick} glow={glow[2]} id={2} val={squares[2]} />
				</div>
				<div className="row2">
					<Square onButtonClick={onButtonClick} glow={glow[3]} id={3} val={squares[3]} />
					<Square onButtonClick={onButtonClick} glow={glow[4]} id={4} val={squares[4]} />
					<Square onButtonClick={onButtonClick} glow={glow[5]} id={5} val={squares[5]} />
				</div>
				<div className="row3">
					<Square onButtonClick={onButtonClick} glow={glow[6]} id={6} val={squares[6]} />
					<Square onButtonClick={onButtonClick} glow={glow[7]} id={7} val={squares[7]} />
					<Square onButtonClick={onButtonClick} glow={glow[8]} id={8} val={squares[8]} />
				</div>
			</div>
		)
	}
	
}

export default Board;