import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

export default function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterBooks = (books, searchTerm) => {
    if (!searchTerm) {
      return books;
    }

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
    );
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

  const filteredBooks = filterBooks(sortedBooks, search);

  return (
    <div className="app">
      <Header handleSearchChange={handleSearchChange} search={search} />
      <MainBody
        filteredBooks={filteredBooks}
        books={books}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />
    </div>
  );
}


