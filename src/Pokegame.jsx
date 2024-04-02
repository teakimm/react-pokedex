import Pokedex from "./Pokedex";
import { shuffle } from "lodash";
import "./Pokegame.css";

const defaultPokemon = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

function Pokegame({ pokemon = defaultPokemon }) {
  const hand1 = [];
  const hand2 = [];
  let totalXP1 = 0;
  let totalXP2 = 0;
  const shuffledPokemon = shuffle(pokemon);

  for (let i = 0; i < 8; i += 2) {
    hand1.push(shuffledPokemon[i]);
    totalXP1 += shuffledPokemon[i].base_experience;
    hand2.push(shuffledPokemon[i + 1]);
    totalXP2 += shuffledPokemon[i + 1].base_experience;
  }

  return (
    <div className="Pokegame">
      <Pokedex pokemon={hand1} name="Player 1" />
      <h1>Winner is: {totalXP1 > totalXP2 ? "Player 1" : "Player 2"}!</h1>
      <Pokedex pokemon={hand2} name="Player 2" />
    </div>
  );
}

export default Pokegame;