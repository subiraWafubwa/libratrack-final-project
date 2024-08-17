import { useEffect, useState } from "react";

export default function Title({ title, setAddNewBook }) {
  const [localTitle, setLocalTitle] = useState(title);

  // Sync local state with the prop when the prop changes
  useEffect(() => {
    setLocalTitle(title);
  }, [title]);

  return (
    <div id="title">
      <p>Title:</p>
      <input
        placeholder="Add Book Title"
        value={localTitle}
        onChange={(e) => {
          const newTitle = e.target.value;
          setLocalTitle(newTitle);
          setAddNewBook({ title: newTitle });
        }}
      />
    </div>
  );
}
