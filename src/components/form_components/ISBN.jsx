import search from "../../../assets/white_search.png";
import React, { useState } from "react";

export default function ISBN({ isbn, setAddNewBook }) {
  const [localIsbn, setLocalIsbn] = useState(isbn);
  const [error, setError] = useState(null);

  const handleFetchBook = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${localIsbn}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems > 0) {
          const bookInfo = data.items[0].volumeInfo;
          setAddNewBook({
            title: bookInfo.title || "",
            author: bookInfo.authors ? bookInfo.authors[0] : "",
            total_pages: bookInfo.pageCount || 0,
            cover_photo_url: bookInfo.imageLinks
              ? bookInfo.imageLinks.thumbnail
              : "",
          });
        } else {
          setError("No book found with this ISBN.");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching the book data.");
      });
  };

  return (
    <div id="isbn">
      <p>ISBN:</p>
      <input
        placeholder="Add book details using ISBN CODE"
        value={localIsbn}
        onChange={(e) => {
          setLocalIsbn(e.target.value);
          setAddNewBook((prev) => ({
            ...prev,
            isbn: e.target.value,
          }));
        }}
      />
      <button onClick={handleFetchBook}>
        <img src={search} alt="Search" />
      </button>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "17px",
            position: "absolute",
            transform: "translate(0px, 36px)",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
