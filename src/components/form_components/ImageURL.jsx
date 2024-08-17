import { useState, useEffect } from "react";

export default function ImageURL({ imageURL: imageURLProp, setAddNewBook }) {
  const [imageURL, setImageURL] = useState(imageURLProp || "");

  useEffect(() => {
    setImageURL(imageURLProp);
  }, [imageURLProp]);

  const handleImageURLChange = (e) => {
    const newImageURL = e.target.value;
    setImageURL(newImageURL);
    setAddNewBook({ cover_photo_url: newImageURL });
  };

  return (
    <div id="image-url">
      <p>Image URL:</p>
      <input
        placeholder="Add Image URL"
        value={imageURL}
        onChange={handleImageURLChange}
      />
    </div>
  );
}
