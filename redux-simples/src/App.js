import React, { useState } from 'react'
import './App.css';
import Media from './components/Media';
import Sorteio from './components/Sorteio';
import Soma from './components/Soma';
import Intervalo from './components/Intervalo';

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max} ></Media>
        <Soma min={min} max={max} ></Soma>
        <Sorteio min={min} max={max} ></Sorteio>
      </div>
    </div>
  );
}

export default App;
