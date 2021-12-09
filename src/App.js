import { useState, useEffect } from 'react';
import './App.css';
import { getPokemon } from './services/pokemon';
import PokeList from './components/PokeList';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
    };
    fetchData();
  }, []);

  const filterPokemon = () => {
    return pokemon.filter((pokemon) => {
      return pokemon.pokemon.includes(query);
    });
  };

  return (
    <div className="App">
      <h1>Pokédex Compendium</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {filterPokemon().map((pokemon) => (
        <PokeList key={pokemon.id} pokemon={pokemon.pokemon} />
      ))}
    </div>
  );
}

export default App;
