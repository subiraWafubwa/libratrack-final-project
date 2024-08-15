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
        value={search} 
        onChange={handleSearchChange} 
      />
      <button id="connect-kindle">Connect to Kindle</button>
      <button onClick={toggleChatVisibility}>
        {isChatVisible ? "Close Chat" : "Open Chat"}
      </button>
      {isChatVisible && (
        <div className="chat-box">
          <Mapp />
        </div>
      )}
      <button id="start-live">Start live session</button>
      <button id="join-live">Join session</button>
    </div>
  );
}
