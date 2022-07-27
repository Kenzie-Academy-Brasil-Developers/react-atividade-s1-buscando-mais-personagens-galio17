import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then(({ results }) => setCharacterList(results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
