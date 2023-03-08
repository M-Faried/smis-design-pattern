import './App.css';
import Counter from './components/Counter';
import LetterCountDisplay from './components/LetterCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LetterCountDisplay />
        <Counter />
      </header>
    </div>
  );
}

export default App;
