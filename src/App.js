import { useState, useEffect } from 'react';
import './App.css';
import { getPokemon, getTypes } from './services/pokemon';
import PokeList from './components/PokeList';
import Controls from './components/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [sort, setSort] = useState('asc');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort, selectedType);
      setPokemon(data.results);
    };
    fetchData();
  }, [query, sort, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTypes();
      setTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Pokédex Compendium</h1>
      <Controls
        types={types}
        query={query}
        setQuery={setQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        sort={sort}
        setSort={setSort}
      />
      <PokeList pokemon={pokemon} />
    </div>
  );
}

export default App;
