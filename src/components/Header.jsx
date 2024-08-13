import React from "react";
import logo from "../../assets/logo.png";
// import search from "../../assets/search.png";
import SearchBooks from "./SearchBooks";

export default function Header() {
  return (
    <div className="header">
      <img id="logo" src={logo} alt="logo" />
      <h1>LibraTrack</h1>
   
      <SearchBooks/>
      {/* <input placeholder="Search by title, genre, author, status or ISBN..." /> */}
      <button id="connect-kindle">Connect to Kindle</button>
      <button id="start-live">Start live session</button>
      <button id="join-live">Join session</button>
    </div>
  );
}
