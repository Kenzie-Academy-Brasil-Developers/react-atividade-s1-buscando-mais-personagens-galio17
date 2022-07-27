import CharCard from "../CharCard";
import "./styles.css";

function Characters({ characterList }) {
  const liList = characterList.map((character) => (
    <CharCard key={character.id} character={character} />
  ));

  return (
    <div className="container">
      <header>
        <h1>Meus personagens</h1>
      </header>
      <main>
        <ul>{liList}</ul>
      </main>
    </div>
  );
}

export default Characters;
