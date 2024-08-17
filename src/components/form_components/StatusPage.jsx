import React, { useEffect, useState } from "react";

export default function StatusPage({ total_pages, setAddNewBook, statusData }) {
  const [localTotalPages, setLocalTotalPages] = useState(total_pages);
  const [selectedValue, setSelectedValue] = useState(
    statusData || "to_be_read"
  );

  useEffect(() => {
    setLocalTotalPages(total_pages);
  }, [total_pages]);

  useEffect(() => {
    setSelectedValue(statusData);
  }, [statusData]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    setAddNewBook({
      status: value,
    });
  };

  const backgroundColor =
    selectedValue === "to_be_read"
      ? "rgb(139, 0, 0)"
      : selectedValue === "currently_reading"
      ? "rgb(139, 132, 0)"
      : "rgb(13, 109, 0)";

  return (
    <div id="status-page">
      <p>Status: </p>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        style={{ backgroundColor, color: "white" }}
      >
        <option
          value="to_be_read"
          style={{ backgroundColor: "rgb(139, 0, 0)", color: "white" }}
        >
          To be Read
        </option>
        <option
          value="currently_reading"
          style={{ backgroundColor: "rgb(139, 132, 0)", color: "white" }}
        >
          Currently Reading
        </option>
        <option
          value="already_read"
          style={{ backgroundColor: "rgb(13, 109, 0)", color: "white" }}
        >
          Already Read
        </option>
      </select>
      <p>Total Pages: </p>
      <input
        placeholder="Add total Pages"
        type="number"
        value={localTotalPages}
        onChange={(e) => {
          const pages = e.target.value;
          setLocalTotalPages(pages);
          setAddNewBook({
            total_pages: pages,
          });
        }}
      />
    </div>
  );
}
