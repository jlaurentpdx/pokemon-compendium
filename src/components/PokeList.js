export default function PokeList({ pokemon }) {
  const filterPokemon = () => {
    return pokemon.filter((pokemon) => {
      return !pokemon.pokemon.includes('-') || pokemon.pokemon.includes('-oh');
    });
  };

  return (
    <div className="pokemon-card">
      {filterPokemon().map((poke) => (
        <p key={poke.id} style={{ textTransform: 'capitalize' }}>
          {poke.pokemon}
        </p>
      ))}
    </div>
  );
}
