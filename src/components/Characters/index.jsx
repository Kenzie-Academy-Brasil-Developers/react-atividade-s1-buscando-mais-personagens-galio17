import { useEffect, useState } from "react";
import api from "../../services/api";
import CharCard from "../CharCard";
import NavigationChar from "../NavigationChar";
import "./styles.css";

function Characters() {
  const [page, setPage] = useState(1);
  const [switchPage, setSwitchPage] = useState({});
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    api
      .get("character", { params: { page: page } })
      .then(
        ({
          data: {
            results,
            info: { prev, next },
          },
        }) => {
          setSwitchPage({ prev, next });
          setCharacterList(results);
        }
      )
      .catch((error) => console.log(error));
  }, [page]);

  const liList = characterList.map((character) => (
    <CharCard key={character.id} character={character} />
  ));

  return (
    <div className="container">
      <header>
        <h1>Meus personagens</h1>
      </header>
      <main>
        <NavigationChar setPage={setPage} switchPage={switchPage} />
        <ul>{liList}</ul>
      </main>
    </div>
  );
}

export default Characters;
