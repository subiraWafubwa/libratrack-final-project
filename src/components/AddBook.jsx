import ISBN from "./form_components/ISBN";
import Title from "./form_components/Title";
import Genre from "./form_components/Genre";
import Author from "./form_components/Author";
import StatusPage from "./form_components/StatusPage";
import ImageURL from "./form_components/ImageURL";
import BookmarkedPage from "./form_components/BookmarkedPage";
import BookFormButton from "./form_components/BookFormButton";
import { useState } from "react";

export default function AddBook({ setAddBook, setBooks }) {
  const newIDValue = (
    (id) => () =>
      ++id
  )(40);

  const [addNewBook, setAddNewBook] = useState({
    id: newIDValue(),
    title: "",
    genre: "Not Added",
    author: "",
    status: "to_be_read",
    isbn: null,
    total_pages: 0,
    cover_photo_url: "",
    bookmark: 0,
  });

  // Post a new data
  const handleSaveBook = () => {
    const { title, author, total_pages } = addNewBook;

    console.log("Data to be sent:", addNewBook);

    if (title && author && total_pages !== 0) {
      fetch("http://localhost:8001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addNewBook),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Book saved successfully:", data);
          setBooks((prev) => [...prev, data]);
          setAddBook(false);
        })
        .catch((error) => {
          console.error("Error saving the book:", error);
        });
    } else {
      alert("The title, author, and total pages must be filled out correctly.");
    }
  };

  return (
    <div className="add-book-background" onClick={() => setAddBook(false)}>
      <div className="add-book-div" onClick={(e) => e.stopPropagation()}>
        <>
          <ISBN setAddNewBook={setAddNewBook} />
          <Title title={addNewBook.title} setAddNewBook={setAddNewBook} />
          <Genre setAddNewBook={setAddNewBook} />
          <Author author={addNewBook.author} setAddNewBook={setAddNewBook} />
          <StatusPage
            total_pages={addNewBook.total_pages}
            setAddNewBook={setAddNewBook}
          />
          <ImageURL setAddNewBook={setAddNewBook} />
          <BookmarkedPage setAddNewBook={setAddNewBook} />
        </>
        <div className="add-book-buttons">
          <BookFormButton
            value="SAVE"
            backgroundColor="rgb(7, 59, 0)"
            onClick={handleSaveBook}
          />
          <BookFormButton value="CANCEL" onClick={() => setAddBook(false)} />
        </div>
      </div>
    </div>
  );
}
