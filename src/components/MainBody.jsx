import React from "react";
import StatusBody from "./StatusBody";
import CardBody from "./CardBody";

export default function MainBody({
  filteredBooks,
  books,
  sortOption,
  handleSortChange,
  setAddBook,
  addBook,
}) {
  return (
    <div className="main-body">
      <StatusBody />
      <CardBody
        filteredBooks={filteredBooks}
        books={books}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        setAddBook={setAddBook}
        addBook={addBook}
      />
    </div>
  );
}
