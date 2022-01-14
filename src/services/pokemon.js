export async function getPokemon(query, sort, selectedType) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'pokemon');
  params.set('direction', sort);

  if (selectedType !== 'all') {
    params.set('type', selectedType);
  }

  const response = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?page=1&perPage=20&${params.toString()}`
  ); // fetch is a function built into browsers
  const data = await response.json(); // response is a built-in
  return data;
}

export async function getTypes() {
  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`);
  const data = await response.json();
  return data.map((item) => item.type);
}
