import React from "react";
import "./index.css";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ISBN from "./components/form_components/ISBN";
import Title from "./components/form_components/Title";
import Genre from "./components/form_components/Genre";
import Author from "./components/form_components/Author";
import StatusPage from "./components/form_components/StatusPage";

function App() {
  const addBook = !true;
  const updateBook = false;

  return (
    <div className="app">
      {addBook ? (
        <div className="add-book-background">
          <div className="add-book-div">
            <ISBN />
            <Title />
            <Genre />
            <Author />
            <StatusPage />
          </div>
        </div>
      ) : null}
      <Header />
      <MainBody />
    </div>
  );
}

export default App;
