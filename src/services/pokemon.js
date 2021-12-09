export async function getPokemon() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`); // fetch is a function built into browsers
  const data = await response.json(); // response is a built-in
  return data;
}
