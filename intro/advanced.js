function Hello({ name, things }) {
  return (
    <div>
      <button onClick={() => alert("hello!")}>
        Hello { name || 'World' }!
      </button>

      { things.map((letter) => (
        <span key={letter}>{letter}</span>
      )) }
    </div>
  );
};
