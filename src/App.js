import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getPokemon } from './services/pokemon';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokédex Compendium</h1>
      {pokemon.map((pokemon) => (
        <div key={pokemon.id}>
          <p>{pokemon.pokemon}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
