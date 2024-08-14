import React, { useEffect, useState } from "react";
import "./style.css"
export default function StatusBody() {
  const [books, setBooks] = useState([]);

  const [showCurrentlyReading, setShowCurrentlyReading] = useState(false);
  const [showWantToRead, setShowWantToRead] = useState(false);
  const [showRead, setShowRead] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((res) => {
        if (!res.ok) {
          
          console.error("Network response was not ok");
          alert("Failed to fetch books. Please try again later.");
          return [];
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        // Handle the error without setting state
        console.error("Fetch error:", error);
        alert("An error occurred while fetching books. Please try again later.");
      });
  }, []);

  const filterBooksByStatus = (status) => {
    return books.filter((book) => book.status === status);
  };

  const currentlyReading = filterBooksByStatus("currently_reading");
  const wantToRead = filterBooksByStatus("to_be_read");
  const read = filterBooksByStatus("already_read");

  return (
    <div className="status-body">
      <h2>Book Status</h2>
      <div className="status-body-list">
        <div className="book-section">
          <button
            className="toggle-button"
            onClick={() => setShowCurrentlyReading(!showCurrentlyReading)}
          >
            {showCurrentlyReading ? "Hide" : "Show"} Currently Reading
          </button>
          {showCurrentlyReading && (
            <div className="books-container">
              {currentlyReading.length > 0 ? (
                currentlyReading.map((book) => (
                  <div key={book.id} className="card">
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
        <div className="book-section">
          <button
            className="toggle-button"
            onClick={() => setShowWantToRead(!showWantToRead)}
          >
            {showWantToRead ? "Hide" : "Show"} Want to Read
          </button>
          {showWantToRead && (
            <div className="books-container">
              {wantToRead.length > 0 ? (
                wantToRead.map((book) => (
                  <div key={book.id} className="card">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                  </div>
                ))
              ) : (
                <p>No books in the Want to Read list.</p>
              )}
            </div>
          )}
        </div>
        <div className="book-section">
          <button
            className="toggle-button"
            onClick={() => setShowRead(!showRead)}
          >
            {showRead ? "Hide" : "Show"} Read
          </button>
          {showRead && (
            <div className="books-container">
              {read.length > 0 ? (
                read.map((book) => (
                  <div key={book.id} className="card">
                    <h3>{book.title}</h3>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                  </div>
                ))
              ) : (
                <p>No books have been read yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
