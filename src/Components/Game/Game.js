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
	
	checkInclusion(i,j,k,arr){
		if(arr[i] !== null && arr[j] !== null && arr[k] !== null){
			if(arr[i] === arr[j] && arr[j] === arr[k])
				return true;
		}
		return false;
	}

	calculateWinner = arr => {
		if(this.checkInclusion(1,0,2,arr)){
			this.setState({winner: arr[1]})
		}
		else if(this.checkInclusion(3,4,5,arr)){
			this.setState({winner: arr[3]})
		}
		else if(this.checkInclusion(6,7,8,arr)){
			this.setState({winner: arr[6]})
		}
		else if(this.checkInclusion(0,3,6,arr)){
			this.setState({winner: arr[0]})
		}
		else if(this.checkInclusion(1,4,7,arr)){
			this.setState({winner: arr[1]})
		}
		else if(this.checkInclusion(2,5,8,arr)){
			this.setState({winner: arr[2]})
		}
		else if(this.checkInclusion(0,4,8,arr)){
			this.setState({winner: arr[0]});
		}
		else if(this.checkInclusion(2,4,6,arr)){
			this.setState({winner: arr[2]});
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
			</div>
		)
	}
}
export default Game;