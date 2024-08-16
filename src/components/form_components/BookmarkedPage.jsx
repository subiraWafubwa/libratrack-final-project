import { useState } from "react";

export default function BookmarkedPage({ bookmark, setAddNewBook }) {
  const [localBookmark, setLocalBookmark] = useState(0);

  return (
    <div id="bookmarked-page">
      <p>Bookmarked Page:</p>
      <input
        placeholder="Add page bookmark"
        type="number"
        value={localBookmark}
        onChange={(e) => {
          setLocalBookmark(e.target.value);
          setAddNewBook((prev) => ({
            ...prev,
            bookmark: e.target.value,
          }));
        }}
      />
    </div>
  );
}
