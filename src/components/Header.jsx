import React from "react";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";

export default function Header({ handleSearchChange, search }) {
  return (
    <div className="header">
      <div className="left-header">
        <img id="logo" src={logo} alt="logo" />
        <h1>LibraTrack</h1>
        <img id="search" src={searchIcon} alt="search" />
        <input
          placeholder="Search by title, genre, author, status or ISBN..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div>
        <button id="connect-kindle">Connect to Kindle</button>
        <button id="start-live">Start live session</button>
        <button id="join-live">Join session</button>
      </div>
    </div>
  );
}
