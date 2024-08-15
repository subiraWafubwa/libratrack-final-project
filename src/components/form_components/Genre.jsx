import { useState } from "react";

export default function Genre({ setAddNewBook }) {
  const [genre, setGenre] = useState("");

  return (
    <div id="genre">
      <p>Genre:</p>
      <input
        placeholder="Add Book Title"
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
          setAddNewBook((prev) => ({
            ...prev,
            genre: e.target.value,
          }));
        }}
      />
    </div>
  );
}
