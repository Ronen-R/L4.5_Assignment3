import './App.css';
import Counter from './components/Counter';
import Values from './components/Values';
import Gallery from './components/Gallery';
import Exchange from './components/Exchange';

function App() {
  return (
    <div className="App">
      <h1 className='text-danger'>React work</h1>
      <Values />
      <hr/>
      <Counter />
      <hr/>
      <Gallery />
      <hr/>
      <Exchange />
    </div>
  );
}

export default App;
