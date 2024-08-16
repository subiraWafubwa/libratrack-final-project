import { useEffect, useState } from "react";

export default function Author({ author, setAddNewBook }) {
  const [localAuthor, setLocalAuthor] = useState(author);

  useEffect(() => {
    setLocalAuthor(author);
  }, [author]);

  return (
    <div id="author">
      <p>Author:</p>
      <input
        placeholder="Add author"
        value={localAuthor}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setLocalAuthor(newAuthor);
          setAddNewBook((prev) => ({
            ...prev,
            author: newAuthor,
          }));
        }}
      />
    </div>
  );
}
