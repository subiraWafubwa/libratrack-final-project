import React, { useEffect, useState } from "react";
import "../index.css";
import BookSection from "./BookSection";

// Importing asset icons
import downYellow from "../../assets/down_yellow.png";
import upYellow from "../../assets/up_yellow.png";
import downRed from "../../assets/down_red.png";
import upRed from "../../assets/up_red.png";
import downGreen from "../../assets/down_green.png";
import upGreen from "../../assets/up_green.png";

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
        console.error("Fetch error:", error);
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
      <BookSection
        color="#F19E39"
        state={showCurrentlyReading}
        setState={setShowCurrentlyReading}
        pValue="Currently Reading"
        bookList={currentlyReading}
        upIcon={upYellow}
        downIcon={downYellow}
      />
      <BookSection
        color="#EA3323"
        state={showWantToRead}
        setState={setShowWantToRead}
        pValue="To be Read"
        bookList={wantToRead}
        upIcon={upRed}
        downIcon={downRed}
      />
      <BookSection
        color="#48752C"
        state={showRead}
        setState={setShowRead}
        pValue="Already Read"
        bookList={read}
        upIcon={upGreen}
        downIcon={downGreen}
      />
    </div>
  );
}
