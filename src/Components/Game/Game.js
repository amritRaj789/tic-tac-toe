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
		if(this.state.winner !== "" || this.state.squares[id] !== null){
			return
		}
		else{
			const array = this.state.squares.splice(0);
			array[id] = this.state.xIsNext ? "X" : "O";
			this.setState({xIsNext: !this.state.xIsNext})
			this.setState({squares: array});
			this.calculateWinner(array);
		}
	}
	
	

	calculateWinner = arr => {
		const lines = [
			[0,1,2],
			[3,4,5],
			[6,7,8],
			[0,3,6],
			[1,4,7],
			[2,5,8],
			[0,4,8],
			[2,4,6]
		];

		for(let line of lines){
			const [a,b,c] = line;
			if(arr[a] && arr[a] === arr[b] && arr[b] === arr[c]){
				this.setState({winner: arr[a]});
				break;
			}
		}
		
	}
	// (0,1,2) (3,4,5) (6,7,8) (0,3,6) (1,4,7) (2,5,8) (0,4,8) (2,4,6)


	render(){
		return(
			<div className="game">
				<h1 className="winner">
					Winner of this match is : {this.state.winner}
				</h1>
				<Board squares={this.state.squares} onButtonClick={this.onButtonClick}/>
				{
				(this.state.winner !== "") ?
					<div className="end-msg-container">
						<h1 className="end-message">
							The Game has ended !
							Thank You for playing !
						</h1>
					</div>
				:
				null
				}
			</div>
		)
	}
}
export default Game;