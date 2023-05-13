function TodoError({ error }) {
  // {error && <p className="error">Error!</p>}

  return (
    <div>
      <h2>Error!</h2>
      <p>{error}</p>
    </div>
  );
}

export { TodoError };
