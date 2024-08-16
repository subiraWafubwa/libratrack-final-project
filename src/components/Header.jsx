import React, { useState } from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import Mapp from "./Mapp";

export default function Header({ handleSearchChange, search }) {
  const [isChatVisible, setChatVisible] = useState(false);

  const toggleChatVisibility = () => {
    setChatVisible(!isChatVisible);
  };

  return (
    <div className="header">
      <img id="logo" src={logo} alt="logo" />
      <h1>LibraTrack</h1>
      <img id="search" src={searchIcon} alt="search" />
      <input
        placeholder="Search by title, genre, author, status or ISBN..."
        id="searchInput"
        value={search}
        onChange={handleSearchChange}
      />
      <button id="open-chat" onClick={toggleChatVisibility}>
        Open Chat
      </button>

      {isChatVisible && (
        <div
          className="add-book-background"
          style={{ transform: "translate(0px, 315px)" }}
        >
          <div className="chat-box">
            <Mapp toggleChatVisibility={toggleChatVisibility} />
          </div>
        </div>
      )}
    </div>
  );
}
