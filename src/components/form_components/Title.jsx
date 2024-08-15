import { useState } from "react";

export default function Title({ setAddNewBook }) {
  const [title, setTitle] = useState("");

  return (
    <div id="title">
      <p>Title:</p>
      <input
        placeholder="Add Book Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setAddNewBook((prev) => ({
            ...prev,
            title: e.target.value,
          }));
        }}
      />
    </div>
  );
}
