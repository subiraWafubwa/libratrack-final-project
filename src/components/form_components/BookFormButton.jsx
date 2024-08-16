export default function BookFormButton({
  value,
  backgroundColor = "rgb(91, 91, 91)",
  setAddBook,
}) {
  return (
    <button
      id="book-button"
      style={{ backgroundColor: backgroundColor }}
      onClick={() => setAddBook(false)}
    >
      {value}
    </button>
  );
}
