import "./styles.css";

function NavigationChar({ setPage, switchPage }) {
  return (
    <section>
      {switchPage.prev && (
        <button
          className="previous"
          onClick={() => setPage((current) => current - 1)}
        >
          Anterior
        </button>
      )}
      {switchPage.next && (
        <button
          className="next"
          onClick={() => setPage((current) => current + 1)}
        >
          Próximo
        </button>
      )}
    </section>
  );
}

export default NavigationChar;
