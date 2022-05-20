import Board from '../Board/Board.js'
import Ship from '../Ship/Ship.js'
import './Game.css';

function Game() {
  return (
    <div className='Game'>
      <div className='board-container'>
        <Board></Board>
      </div>
      <div className='ship-container'>
        <Ship></Ship>
        <Ship></Ship>
        <Ship></Ship>
        <Ship></Ship>
        <Ship></Ship>
        <Ship></Ship>
      </div>
    </div>
  );
}

export default Game;