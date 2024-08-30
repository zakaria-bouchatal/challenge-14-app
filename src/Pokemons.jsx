import './Pokemons.css';

function Pokemons(props) {
  return (
    <div className='ok'>
      <p>Name: {props.name}</p>
      <div>
        {props.type.map((t, index) => (
          <span key={index} className="pokis">
            {t}
          </span>
        ))}
      </div>
      <img
        src={props.image} // Use the image URL passed from App.js
        alt={props.name}
        className="pokemon-image"
      />
    </div>
  );
}

export default Pokemons;

  