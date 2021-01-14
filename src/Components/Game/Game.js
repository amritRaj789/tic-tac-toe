import React, {Component} from 'react';
import Board from '../Board/Board.js';
import './Game.css';

class Game extends Component {
	constructor(){
		super();
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
			winner: "",
			squaresClicked: 0,
			gameEnded: false,
			squaresGlow: Array(9).fill(0)
		}
		this.endMessage = "The Game has ended!. Thank You for playing!";
	}

	onButtonClick = id => {

		if(this.state.winner !== "" || this.state.squares[id] !== null)
			return
		const array = this.state.squares.splice(0);
		array[id] = this.state.xIsNext ? "X" : "O";
		this.setState({xIsNext: !this.state.xIsNext})
		this.setState({squares: array});
		this.calculateWinner(array);
		this.setState({squaresClicked: this.state.squaresClicked+1});
		if(this.state.squaresClicked === 8){
			this.setState({gameEnded: true}); 
		}

	}

	resetBoard = () => {
		this.setState({
			squares: Array(9).fill(null),
			xIsNext: true,
			winner: "",
			squaresClicked: 0,
			gameEnded: false,
			squaresGlow: Array(9).fill(0)
		});
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
				this.setState({gameEnded: true});
				const array = Array(9).fill(0);
				array[a] = 1;
				array[b] = 1;
				array[c] = 1;
				this.setState({squaresGlow: array});
				break;
			}
		}
		
	}
	// (0,1,2) (3,4,5) (6,7,8) (0,3,6) (1,4,7) (2,5,8) (0,4,8) (2,4,6)


	render(){
		let topBannerMessage, nextPlayer;
		nextPlayer = this.state.xIsNext ? "X" : "O";
		if(this.state.squaresClicked === 9 && this.state.winner==="")
			topBannerMessage = "It is a Draw!!"
		else{
			topBannerMessage = this.state.winner==="" ? `Next Player : ${nextPlayer}` : `${this.state.winner} has won this match!`;
		}

		return(
			<div className="game">
				<div className="header">
					<h1 className="title">
						TIC TAC TOE
					</h1>
					<h1 className="top-banner">
						{topBannerMessage}
					</h1>
				</div>
				<Board squares={this.state.squares} glow={this.state.squaresGlow} onButtonClick={this.onButtonClick}/>
				{
					(this.state.gameEnded) ? 
					<div className="end-msg-container">
						<h1 className="end-message">{this.endMessage}</h1>
						<div className="reset-btn" onClick={this.resetBoard}><p>RESET</p></div>
					</div> 
					: null
				}

			</div>
		)
	}
}
export default Game;