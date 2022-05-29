import './Game.css';
import Board from '../Board/Board.js'
import React, { useState, useEffect } from "react";

export default function Game() {
  const [squares, setSquaress] = useState(Array(100).fill(
    { hasShip: false, isHit: false }
  ));
  const [pieces, setPieces] = useState([
    { name: 'carrier', length: 5, locations: [21, 22, 23, 24, 25] },
    { name: 'battleship', length: 4, locations: [3, 4, 5, 6] },
    { name: 'cruiser', length: 3, locations: [51, 52, 53] },
    { name: 'submarine', length: 2, locations: [55, 56] },
    { name: 'submarine', length: 2, locations: [75, 76] },
    { name: 'tugboat', length: 1, locations: [84] },
    { name: 'tugboat', length: 1, locations: [88] },
  ]);
  const [phase, setPhase] = useState('prep');


  return (
    <div className='Game'>
      <div className='game-title'>Fire Support</div>
      <div className='game-instructions'>Arrange your vehicles</div>
      <div className='game-ui'>
        <Board squares={squares}/>
        <button className='game-action' />
      </div>
    </div>
  );
}