import { useState } from "react";

export default function BookmarkedPage({ setAddNewBook }) {
  return (
    <div id="bookmarked-page">
      <p>Bookmarked Page:</p>
      <input
        placeholder="Add page bookmark"
        type="number"
        onChange={(e) => {
          setAddNewBook((prev) => ({
            ...prev,
            bookmark: e.target.value,
          }));
        }}
      />
    </div>
  );
}
