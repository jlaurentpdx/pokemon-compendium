export default function Controls({
  types,
  query,
  setQuery,
  selectedType,
  setSelectedType,
  sort,
  setSort,
}) {
  return (
    <div className="controls">
      <input
        type="text"
        placeholder="Search Pokédex"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        style={{ textTransform: 'capitalize' }}
      >
        <option key="all" value="all">
          all
        </option>
        {types.map((type) => (
          <option key={type} value={type} style={{ textTransform: 'capitalize' }}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
