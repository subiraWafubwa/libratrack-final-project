export default function StatusBookItem({
  setState,
  state,
  pValue,
  bookList,
  color,
  downIcon,
  upIcon,
}) {
  return (
    <div className="book-section">
      <button className="toggle-button" onClick={() => setState(!state)}>
        <p style={{ color: color }}>{pValue}</p>
        <img src={state ? upIcon : downIcon} />
      </button>
      {state && (
        <div className="books-container">
          {bookList.length > 0 ? (
            bookList.map((book) => (
              <div key={book.id} className="status-card">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
              </div>
            ))
          ) : (
            <p>No books currently being read.</p>
          )}
        </div>
      )}
    </div>
  );
}
