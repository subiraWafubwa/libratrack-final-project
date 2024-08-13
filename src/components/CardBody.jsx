import React, { useState, useEffect } from "react";
import add from "../../assets/add.png";

export default function CardBody() {
  const [books, setBooks] = useState([]);
  const [sortOption, setSortOption] = useState("title");

  useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedBooks = [...books].sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "last_updated") {
      return new Date(b.last_updated) - new Date(a.last_updated);
    } else if (sortOption === "genre") {
      return a.genre.localeCompare(b.genre);
    } else if (sortOption === "author") {
      return a.author.localeCompare(b.author);
    } else if (sortOption === "status") {
      return a.status.localeCompare(b.status);
    }
    return 0;
  });

  return (
    <div className="card-body">
      <div className="card-body-top-bar">
        <h2>You have {books.length} books in your collection</h2>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="title">Sort by title</option>
          <option value="genre">Sort by genre</option>
          <option value="author">Sort by author</option>
          <option value="status">Sort by status</option>
        </select>
      </div>
      <div className="card-body-main">
        {sortedBooks.map((book) => (
          <div key={book.id} className="card">            
            <h3>{book.title}</h3>
            <img src={book.cover_photo_url} alt="pic" />
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Status: {book.status}</p>
          </div>
        ))}
        <button id="add-book">
          <img src={add} alt="plus image" />
        </button>
      </div>
    </div>
  );
}
