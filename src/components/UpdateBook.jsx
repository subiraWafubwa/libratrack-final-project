import ISBN from "./form_components/ISBN";
import Title from "./form_components/Title";
import Genre from "./form_components/Genre";
import Author from "./form_components/Author";
import StatusPage from "./form_components/StatusPage";
import ImageURL from "./form_components/ImageURL";
import BookmarkedPage from "./form_components/BookmarkedPage";
import BookFormButton from "./form_components/BookFormButton";
import { useState, useEffect } from "react";

export default function UpdateBook({ setUpdateBook, setBooks, bookId }) {
  const [updateBookData, setUpdateBookData] = useState({
    id: "",
    title: "",
    genre: "Not Added",
    author: "",
    status: "to_be_read",
    isbn: "",
    total_pages: 0,
    cover_photo_url: "",
    bookmark: 0,
  });

  // Fetch book data based on the bookId
  useEffect(() => {
    if (bookId) {
      fetch(`http://localhost:8001/books/${bookId}`)
        .then((response) => response.json())
        .then((data) => {
          setUpdateBookData(data);
        })
        .catch((error) => {
          console.error("Error fetching the book data:", error);
        });
    }
  }, [bookId]);

  const handleSaveBook = () => {
    const { title, author, total_pages } = updateBookData;

    // Validate the essential fields
    if (title && author && total_pages > 0) {
      // Fetch with PUT method to update the book data
      fetch(`http://localhost:8001/books/${bookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateBookData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setBooks((prev) =>
            prev.map((book) => (book.id === data.id ? data : book))
          );
          setUpdateBook(false);
        })
        .catch((error) => {
          console.error("Error updating the book:", error);
        });
    } else {
      alert("The title, author, and total pages must be filled out correctly.");
    }
  };

  const handleDeleteBook = () => {
    fetch(`http://localhost:8001/books/${updateBookData.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        console.log("Book deleted successfully");
        // Remove the deleted book from the books state
        setBooks((prev) =>
          prev.filter((book) => book.id !== updateBookData.id)
        );
        setUpdateBook(false);
      })
      .catch((error) => {
        console.error("Error deleting the book:", error);
      });
  };

  return (
    <div className="add-book-background" onClick={() => setUpdateBook(false)}>
      <div className="add-book-div" onClick={(e) => e.stopPropagation()}>
        {/* Form Components */}
        <ISBN
          isbn={updateBookData.isbn}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        <Title
          title={updateBookData.title}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        <Genre
          genre={updateBookData.genre}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        <Author
          author={updateBookData.author}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        <StatusPage
          total_pages={updateBookData.total_pages}
          statusData={updateBookData.status}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        <ImageURL
          imageURL={updateBookData.cover_photo_url}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        <BookmarkedPage
          bookmark={updateBookData.bookmark}
          setAddNewBook={(data) =>
            setUpdateBookData((prev) => ({ ...prev, ...data }))
          }
        />
        {/* Action Buttons */}
        <div className="add-book-buttons">
          <BookFormButton
            value="UPDATE"
            backgroundColor="rgb(7, 59, 0)"
            onClick={handleSaveBook}
          />
          <BookFormButton
            value="DELETE"
            backgroundColor="red"
            onClick={handleDeleteBook}
          />
          <BookFormButton value="CANCEL" onClick={() => setUpdateBook(false)} />
        </div>
      </div>
    </div>
  );
}
