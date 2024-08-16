import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import AddBook from "./components/AddBook";
import UpdateBook from "./components/UpdateBook";

function App() {
  const [addBook, setAddBook] = useState(false);
  const [updateBook, setUpdateBook] = useState(false);
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("title");
  const [selectedBookId, setSelectedBookId] = useState(null);

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
    if (!searchTerm) return books;
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
    if (sortOption === "title") return a.title.localeCompare(b.title);
    if (sortOption === "genre") return a.genre.localeCompare(b.genre);
    if (sortOption === "author") return a.author.localeCompare(b.author);
    if (sortOption === "status") return a.status.localeCompare(b.status);
    return 0;
  });

  const filteredBooks = filterBooks(sortedBooks, search);

  const getBookID = (id) => {
    setSelectedBookId(id);
    setUpdateBook(true);
  };

  return (
    <div className="app">
      {addBook && <AddBook setAddBook={setAddBook} setBooks={setBooks} />}
      {updateBook && (
        <UpdateBook
          setUpdateBook={setUpdateBook}
          setBooks={setBooks}
          bookId={selectedBookId}
        />
      )}
      <Header handleSearchChange={handleSearchChange} search={search} />
      <MainBody
        filteredBooks={filteredBooks}
        books={books}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        setAddBook={setAddBook}
        setUpdateBook={getBookID}
      />
    </div>
  );
}

export default App;
