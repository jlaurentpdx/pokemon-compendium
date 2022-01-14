import { useState, useEffect } from 'react';
import './App.css';
import { getPokemon, getTypes } from './services/pokemon';
import PokeList from './components/PokeList';
import Controls from './components/Controls';
import BackToTop from 'react-back-to-top-button';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [sort, setSort] = useState('asc');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, sort, selectedType);
      setPokemon(data.results);
      setLoading(false);
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
      {loading ? (
        <>
          <h2>gotta&apos; fetch &apos;em all...</h2>
        </>
      ) : (
        <>
          <Controls
            types={types}
            query={query}
            setQuery={setQuery}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            sort={sort}
            setSort={setSort}
          />
          <BackToTop showOnScollUp showAt={100} speed={1500} easing="easeInOutQuint">
            <span className="scroll-button">back to top</span>
          </BackToTop>
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
