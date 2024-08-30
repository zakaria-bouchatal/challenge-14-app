import Pokemons from './Pokemons';
import blastoiseImage from './assets/blastoise.avif';
import bulbasaur from './assets/bulbasaur.avif';
import butterfreeImage from './assets/butterfree.avif';
import caterpieImage from './assets/caterpie.avif';
import charizardImage from './assets/charizard.avif';
import charmanderImage from './assets/charmander.avif';
import charmeleonImage from './assets/charmeleon.avif';
import ivysaurImage from './assets/ivysaur.avif';
import metapodImage from './assets/metapod.avif';
import pikachuImage from './assets/pikachu.avif';
import squirtleImage from './assets/squirtle.avif';
import wartortleImage from './assets/wartortle.avif';
import "./index.css";

function App() {
  return (
    <div className='BS'>
      <Pokemons image={blastoiseImage} name="Blastoise" type={["WATER"]} className="pokemon-card blastoise" />
      <Pokemons image={bulbasaur} name="Bulbasaur" type={["GRASS", "POISON"]} className="pokemon-card bulbasaur" />
      <Pokemons image={butterfreeImage} name="Butterfree" type={["BUG", "FLYING"]} className="pokemon-card butterfree" />
      <Pokemons image={caterpieImage} name="Caterpie" type={["BUG"]} className="pokemon-card caterpie" />
      <Pokemons image={charizardImage} name="Charizard" type={["FIRE", "FLYING"]} className="pokemon-card charizard" />
      <Pokemons image={charmanderImage} name="Charmander" type={["FIRE"]} className="pokemon-card charmander" />
      <Pokemons image={charmeleonImage} name="Charmeleon" type={["FIRE"]} className="pokemon-card charmeleon" />
      <Pokemons image={ivysaurImage} name="Ivysaur" type={["GRASS", "POISON"]} className="pokemon-card ivysaur" />
      <Pokemons image={metapodImage} name="Metapod" type={["BUG"]} className="pokemon-card metapod" />
      <Pokemons image={pikachuImage} name="Pikachu" type={["ELECTRIC"]} className="pokemon-card pikachu" />
      <Pokemons image={squirtleImage} name="Squirtle" type={["WATER"]} className="pokemon-card squirtle" />
      <Pokemons image={wartortleImage} name="Wartortle" type={["WATER"]} className="pokemon-card wartortle" />
    </div>
  );
}

export default App;
