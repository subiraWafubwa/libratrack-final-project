import React from "react";
import StatusBody from "./StatusBody";
import CardBody from "./CardBody";

export default function Body({filteredBooks,books,sortOption,handleSortChange}) {
  return (
    <div className="main-body">
      <StatusBody />
      <CardBody filteredBooks={filteredBooks} books={books} sortOption={sortOption} handleSortChange={handleSortChange} />
    </div>
  );
}
