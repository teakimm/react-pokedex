import Pokedex from "./Pokedex";

/** Component for the entire page, renders Pokedexes
 *
 * Props: none
 * Children: Pokedex
 */
function App() {

  return (
    <div>
      <Pokedex />
      <Pokedex />
      <Pokedex />
    </div>
  );
};

export default App;
