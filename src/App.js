import './App.css';
import Board from './components/Board/Board.js'
import Ship from './components/Ship/Ship.js'

function App() {
  return (
    <div className="App">
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

export default App;
