import Pokecard from "./Pokecard";
import "./Pokedex.css";


/** Component for the Pokedex. Creates a list of pokemon cards
 *
 * Props: Array of objects, pokemon, which contain data about pokemon.
 *        defaults to defaultPokemon
 * Parents: App
 * Children: Pokecard
 *
 */ //TODO: add total xp by passing it in from pokegame
function Pokedex({ pokemon, name = "Pokedex" }) {
    return (
        <div className="Pokedex">
            <h1>{name}</h1>
            <div className="Pokedex-container">
                {pokemon.map(p =>
                    <Pokecard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        base_experience={p.base_experience}
                    />)}
            </div>
        </div>
    );
}

export default Pokedex;

