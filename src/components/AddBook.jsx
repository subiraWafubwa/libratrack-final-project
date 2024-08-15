import ISBN from "./form_components/ISBN";
import Title from "./form_components/Title";
import Genre from "./form_components/Genre";
import Author from "./form_components/Author";
import StatusPage from "./form_components/StatusPage";
import ImageURL from "./form_components/ImageURL";
import BookmarkedPage from "./form_components/BookmarkedPage";
import BookFormButton from "./form_components/BookFormButton";
import { useState } from "react";

export default function AddBook({ setAddBook }) {
  // Function to create new id value
  const newIDValue = (
    (id) => () =>
      ++id
  )(40);

  // Adding a new book state.
  const [addNewBook, setAddNewBook] = useState({
    id: newIDValue(),
    title: "",
    genre: "",
    author: "",
    status: "",
    isbn: null,
    total_pages: 0,
    cover_photo_url: "",
    bookmark: 0,
  });

  return (
    <div className="add-book-background" onClick={() => setAddBook(false)}>
      <div className="add-book-div" onClick={(e) => e.stopPropagation()}>
        <>
          <ISBN setAddNewBook={setAddNewBook} />
          <Title setAddNewBook={setAddNewBook} />
          <Genre setAddNewBook={setAddNewBook} />
          <Author setAddNewBook={setAddNewBook} />
          <StatusPage setAddNewBook={setAddNewBook} />
          <ImageURL setAddNewBook={setAddNewBook} />
          <BookmarkedPage setAddNewBook={setAddNewBook} />
        </>
        <div className="add-book-buttons">
          <BookFormButton
            value="SAVE"
            backgroundColor="rgb(7, 59, 0)"
            addNewBook={addNewBook}
          />
          <BookFormButton value="CANCEL" setAddBook={setAddBook} />
        </div>
      </div>
    </div>
  );
}
