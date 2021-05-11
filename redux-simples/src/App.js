import './App.css';
import Card from './components/Card';
import Intervalo from './components/intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Card title="Card 3" blue>
          Y
          </Card>
        <Card title="Card 4" purple>
          Y
        </Card>
        <Card title="Card 2" green>
          X
        </Card>
      </div>
    </div>
  );
}

export default App;
