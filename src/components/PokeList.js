import './PokeList.css';

export default function PokeList({ pokemon }) {
  const filterPokemon = () => {
    return pokemon.filter((pokemon) => {
      return !pokemon.pokemon.includes('-') || pokemon.pokemon.includes('-oh');
    });
  };

  return (
    <div className="pokemon-list">
      {filterPokemon().map((poke) => (
        <div key={poke.id} className="pokemon-card" style={{ textTransform: 'capitalize' }}>
          <img className="image" src={poke.url_image} />
          <div className="name">{poke.pokemon}</div>
          <div className="stats-div">
            <span>
              HP: <span className="stat">{poke.hp}</span>{' '}
            </span>
            <span>
              Attack: <span className="stat">{poke.attack}</span>{' '}
            </span>
            <span>
              Defense: <span className="stat">{poke.defense}</span>{' '}
            </span>
            <span>
              Sp. Attack: <span className="stat">{poke.special_attack}</span>{' '}
            </span>
            <span>
              Sp. Defense: <span className="stat">{poke.special_defense}</span>{' '}
            </span>
            <span>
              Speed: <span className="stat">{poke.speed}</span>{' '}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
