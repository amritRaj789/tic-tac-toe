import React, {Component} from 'react';
import Board from '../Board/Board.js';

class Game extends Component {
	constructor(){
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		}	
	}

	onButtonClick = id => {
		if(this.state.squares[id] === null){
			const array = this.state.squares.splice(0);
			array[id] = this.state.xIsNext ? "X" : "O";
			this.setState({xIsNext: !this.state.xIsNext})
			this.setState({squares: array});
		}
	}

	render(){
		return(
				<Board squares={this.state.squares} onButtonClick={this.onButtonClick}/>
		)
	}
}
export default Game;