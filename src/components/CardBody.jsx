import React from "react";
import add from "../../assets/add.png";
import defaultCoverImage from "../../assets/default_cover_image.jpg";

export default function CardBody({
  filteredBooks,
  books,
  sortOption,
  handleSortChange,
  setAddBook,
  setUpdateBook,
}) {
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
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="card"
            onClick={() => {
              setUpdateBook(book.id);
            }}
          >
            <img
              src={
                book.cover_photo_url ? book.cover_photo_url : defaultCoverImage
              }
              alt="pic"
            />
            <div id="card-details">
              <h3>{book.title}</h3>
              <p>
                <b>Author:</b> {book.author}
              </p>
              <p>
                <b>Genre:</b> {book.genre}
              </p>
              <p>
                <b>Status: </b>{" "}
                {book.status === "already_read"
                  ? "Already Read"
                  : book.status === "to_be_read"
                  ? "To be Read"
                  : "Currently Reading"}
              </p>
              <p>
                <b>Bookmarked Page: </b>
                {book.bookmark}/{book.total_pages}
              </p>
            </div>
          </div>
        ))}
        <button
          id="add-book"
          onClick={() => {
            setAddBook(true);
          }}
        >
          <img src={add} alt="plus image" />
        </button>
      </div>
    </div>
  );
}
