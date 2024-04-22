/* eslint-disable react/prop-types */
export default function PokemonCard({ image_url, name, types }) {
  return (
    <>
      <div className="pokemon-cards">
        <img src={image_url}></img>
        <p className="title">{name}</p>
        <p className="description">{types.join(", ")}</p>
      </div>
    </>
  );
}
