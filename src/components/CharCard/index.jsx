import "./styles.css";

function CharCard({ character: { name, status, image, species } }) {
  return (
    <li className={`card ${status}`}>
      <img className="card__img" src={image} alt={`Imagem de ${name}`} />
      <div className="card__description">
        <h2 className="card__name">
          {name.slice(0, 15)}
          {name.length > 15 && "..."}
        </h2>
        <span className="card__specie">{species}</span>
      </div>
    </li>
  );
}

export default CharCard;
