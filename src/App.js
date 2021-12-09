import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPokemon } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      console.log(data);
      setPokemon(data);
    };
    fetchData();
  }, []);

  return <div className="App"></div>;
}

export default App;
