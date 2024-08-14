import React, { useState, useEffect } from "react";
import add from "../../assets/add.png";

export default function CardBody({filteredBooks,books,sortOption,handleSortChange}) {
 
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
          <div key={book.id} className="card">
            <img src={book.cover_photo_url} alt="pic" />
            <h3>{book.title}</h3>
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
