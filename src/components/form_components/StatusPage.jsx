import React, { useState } from "react";

function StatusPage() {
  const [selectedValue, setSelectedValue] = useState("to_be_read");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
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
      <input placeholder="Add total Pages" />
    </div>
  );
}

export default StatusPage;
