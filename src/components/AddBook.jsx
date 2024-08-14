import ISBN from "./form_components/ISBN";
import Title from "./form_components/Title";
import Genre from "./form_components/Genre";
import Author from "./form_components/Author";
import StatusPage from "./form_components/StatusPage";
import ImageURL from "./form_components/ImageURL";
import BookmarkedPage from "./form_components/BookmarkedPage";
import BookFormButton from "./form_components/BookFormButton";

export default function AddBook({ setAddBook }) {
  return (
    <div className="add-book-background" onClick={() => setAddBook(false)}>
      <div className="add-book-div" onClick={(e) => e.stopPropagation()}>
        <>
          <ISBN />
          <Title />
          <Genre />
          <Author />
          <StatusPage />
          <ImageURL />
          <BookmarkedPage />
        </>
        <div className="add-book-buttons">
          <BookFormButton value="SAVE" backgroundColor="rgb(7, 59, 0)" />
          <BookFormButton value="CANCEL" setAddBook={setAddBook} />
        </div>
      </div>
    </div>
  );
}
