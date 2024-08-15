import { useState } from "react";

export default function Author({ setAddNewBook }) {
  const [author, setAuthor] = useState("");

  return (
    <div id="author">
      <p>Author:</p>
      <input
        placeholder="Add author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
          setAddNewBook((prev) => ({
            ...prev,
            author: e.target.value,
          }));
        }}
      />
    </div>
  );
}
