import './App.css';
import Board from './Board'
import Ship from './Ship'

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
