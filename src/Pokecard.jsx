import "./Pokecard.css";
const POKEMON_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Component for individual pokemon cards. Contains data about a pokemon
 *
 * Props: id, name, type, base_experience. Data about pokemon
 * Parents: Pokedex
 *
 */
function Pokecard({ id, name, type, base_experience }) {
    return (
        <div className="Pokecard">
            <h2 className="Pokecard-name">{name}</h2>
            <img className="Pokecard-img" src={`${POKEMON_IMG_URL}${id}.png`} alt={name} />
            <h4 className="Pokecard-type">Type: {type}</h4>
            <h4 className="Pokecard-exp">EXP: {base_experience}</h4>
        </div>
    );
}


export default Pokecard;