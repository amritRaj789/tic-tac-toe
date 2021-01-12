import React, {Component} from 'react';
import Square from '../Square/Square.js';
import './Board.css';
class Board extends Component {

	constructor(){
		super();
		this.state = {
			squares: Array(9).fill(null),
			xisNext: true,
		}
	}

	onButtonClick = id => {
		const array = this.state.squares.splice(0);

		array[id] = this.state.xisNext ? "X" : "O";
		this.setState({xisNext: !this.state.xisNext})
		this.setState({squares: array});
	}
	render(){
		return(
			<div className='board'>
				<div className="row1">
					<Square onButtonClick={this.onButtonClick} id={0} val={this.state.squares[0]}/>
					<Square onButtonClick={this.onButtonClick} id={1} val={this.state.squares[1]}/>
					<Square onButtonClick={this.onButtonClick} id={2} val={this.state.squares[2]}/>
				</div>
				<div className="row2">
					<Square onButtonClick={this.onButtonClick} id={3} val={this.state.squares[3]}/>
					<Square onButtonClick={this.onButtonClick} id={4} val={this.state.squares[4]}/>
					<Square onButtonClick={this.onButtonClick} id={5} val={this.state.squares[5]}/>
				</div>
				<div className="row3">
					<Square onButtonClick={this.onButtonClick} id={6} val={this.state.squares[6]}/>
					<Square onButtonClick={this.onButtonClick} id={7} val={this.state.squares[7]}/>
					<Square onButtonClick={this.onButtonClick} id={8} val={this.state.squares[8]}/>
				</div>
			</div>
		)
	}
	
}

export default Board;