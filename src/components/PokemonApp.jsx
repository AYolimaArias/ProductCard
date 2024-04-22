import PokemonCard from "./PokemonCard";
import { useState } from "react";
import pokemonDB from "../data/pokemons.json";

export default function PokemonApp() {
  const [pokemons, setPokemons] = useState(pokemonDB);
  //metodo para traer tipos del pokemon:
  const pokemonTypes = Array.from(
    new Set(pokemonDB.flatMap((pokemon) => pokemon.types))
  );
  //metodo para filtrar pokemones:
  function filteredPokemonsByType(type) {
    if (type === "") return setPokemons(pokemonDB);

    const nextPokemons = pokemonDB.filter((pokemon) =>
      pokemon.types.includes(type)
    );
    setPokemons(nextPokemons);
  }

  function handleSelection(event) {
    filteredPokemonsByType(event.target.value);
  }
  return (
    <>
      <div className="filter-content">
      <p>Filter by type</p>
        <select id="opciones" onChange={(e) => handleSelection(e)}>
          <option value="">All types</option>
          {pokemonTypes.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
        <div className="flter-container">
        {pokemons.map((pokemon) => (
          <PokemonCard
            image_url={pokemon.image_url}
            name={pokemon.name}
            types={pokemon.types}
            key={pokemon.id}
          />
        ))}
        </div>
    </>
  );
}
