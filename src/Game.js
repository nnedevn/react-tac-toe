import React, {Component} from 'react';

// Import Components
import Board from './Board';

class Game extends Component{
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div> {/* Status */} </div>
          <ol> {/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

export default Game
