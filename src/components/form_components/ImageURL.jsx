import { useState } from "react";

export default function ImageURL({ setAddNewBook }) {
  const [imageURL, setImageURL] = useState("");

  return (
    <div id="image-url">
      <p>Image URL:</p>
      <input
        placeholder="Add Image URL"
        value={imageURL}
        onChange={(e) => {
          setImageURL(e.target.value),
            setAddNewBook((prev) => ({
              ...prev,
              cover_photo_url: e.target.value,
            }));
        }}
      />
    </div>
  );
}
