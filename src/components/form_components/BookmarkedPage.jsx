import { useState, useEffect } from "react";

export default function BookmarkedPage({
  bookmark: bookmarkProp,
  setAddNewBook,
}) {
  const [localBookmark, setLocalBookmark] = useState(bookmarkProp || 0);

  useEffect(() => {
    setLocalBookmark(bookmarkProp);
  }, [bookmarkProp]);

  const handleBookmarkChange = (e) => {
    const newBookmark = e.target.value;
    setLocalBookmark(newBookmark);
    setAddNewBook({ bookmark: newBookmark });
  };

  return (
    <div id="bookmarked-page">
      <p>Bookmarked Page:</p>
      <input
        placeholder="Add page bookmark"
        type="number"
        value={localBookmark}
        onChange={handleBookmarkChange}
      />
    </div>
  );
}
