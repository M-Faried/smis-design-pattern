import './App.css';
import Counter from './components/Counter';
import LetterCounter from './components/LetterCounter'
import injectReduxStore from './appState/injectors/injectReduxStore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LetterCounter />
        <Counter />
      </header>
    </div>
  );
}

export default injectReduxStore(App);
