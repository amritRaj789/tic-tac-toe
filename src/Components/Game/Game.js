import React, {Component} from 'react';
import Board from '../Board/Board.js';
import './Game.css';

class Game extends Component {
	constructor(){
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
			winner: ""
		}	
	}

	onButtonClick = id => {
		if(this.state.squares[id] === null){
			const array = this.state.squares.splice(0);
			array[id] = this.state.xIsNext ? "X" : "O";
			this.setState({xIsNext: !this.state.xIsNext})
			this.setState({squares: array});
			this.calculateWinner(array);
		}
	}

	calculateWinner = arr => {
		if(arr[0] === arr[1] && arr[0] === arr[2] && arr[2] === arr[1])
			this.setState({winner: arr[0]})
		else if(arr[3] === arr[4] && arr[3] === arr[5] && arr[4] === arr[5])
			this.setState({winner: arr[3]})
		else if(arr[6] === arr[7] && arr[6] === arr[8] && arr[7] === arr[8])
			this.setState({winner: arr[6]})
		else if(arr[0] === arr[3] && arr[0] === arr[6] && arr[3] === arr[6])
			this.setState({winner: arr[0]})
		else if(arr[1] === arr[4] && arr[1] === arr[7] && arr[4] === arr[7])
			this.setState({winner: arr[1]})
		else if(arr[2] === arr[5] && arr[2] === arr[8] && arr[5] === arr[8])
			this.setState({winner: arr[2]})
		else if(arr[0] === arr[4] && arr[0] === arr[8] && arr[4] === arr[8])
			this.setState({winner: arr[0]})
		else if(arr[2] === arr[4] && arr[2] === arr[6] && arr[4] === arr[6])
			this.setState({winner: arr[2]})
	}
	// (0,1,2) (3,4,5) (6,7,8) (0,3,6) (1,4,7) (2,5,8) (0,4,8) (2,4,6)


	render(){
		return(
			<div className="game">
				<h1 className="winner">
					Winner of this match is : {this.state.winner}
				</h1>
				<Board squares={this.state.squares} onButtonClick={this.onButtonClick}/>
			</div>
		)
	}
}
export default Game;