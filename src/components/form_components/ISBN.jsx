// import search from "../../../assets/white_search.png";
// import React, { useState } from "react";

// export default function ISBN() {
//   const [isbn, setIsbn] = useState("");
//   const [bookData, setBookData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFetchBook = () => {
//     const url = `http://localhost:8001/books`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.totalItems > 0) {
//           setBookData(data.items[0].volumeInfo);
//           setError(null);
//         } else {
//           setError("No book found with this ISBN.");
//           setBookData(null);
//         }
//       })
//       .catch(() => {
//         setError("An error occurred while fetching the book data.");
//         setBookData(null);
//       });
//   };

//   return (
//     <div id="isbn">
//       <p>ISBN:</p>
//       <input
//         placeholder="Add book details using ISBN CODE"
//         value={isbn}
//         onChange={(e) => setIsbn(e.target.value)}
//       />
//       <button onClick={handleFetchBook}>
//         <img src={search} />
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {bookData &&
//         console.log({
//           title: bookData.title,
//           author: bookData.authors[0],
//           total_pages: bookData.pageCount,
//         })}
//     </div>
//   );
// }


import search from "../../../assets/white_search.png";
import React, { useState } from "react";

export default function ISBN({ onAutoFill }) {
  const [isbn, setIsbn] = useState("");
  const [error, setError] = useState(null);

  const handleFetchBook = () => {
    const url = `http://localhost:8001/books?isbn=${isbn}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.totalItems > 0) {
          const bookInfo = data.items[0].volumeInfo;
          setError(null);
          onAutoFill({
            title: bookInfo.title || "",
            author: bookInfo.authors?.[0] || "",
            totalPages: bookInfo.pageCount || "",
          });
        } else {
          setError("No book found with this ISBN.");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching the book data.");
      });
  };

  return (
    <div id="isbn">
      <p>ISBN:</p>
      <input
        placeholder="Add book details using ISBN CODE"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button onClick={handleFetchBook}>
        <img src={search} alt="search" />
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
