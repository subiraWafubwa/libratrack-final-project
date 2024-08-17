import { useState, useEffect } from "react";

export default function Genre({ genre: genreProp, setAddNewBook }) {
  const [genre, setGenre] = useState(genreProp || "");

  useEffect(() => {
    setGenre(genreProp);
  }, [genreProp]);

  const handleGenreChange = (e) => {
    const newGenre = e.target.value;
    setGenre(newGenre);
    setAddNewBook({
      genre: newGenre,
    });
  };

  return (
    <div id="genre">
      <p>Genre:</p>
      <input
        placeholder="Add Book Genre"
        value={genre}
        onChange={handleGenreChange}
      />
    </div>
  );
}
