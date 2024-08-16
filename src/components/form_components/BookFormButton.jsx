export default function BookFormButton({
  value,
  backgroundColor = "rgb(91, 91, 91)",
  onClick,
}) {
  return (
    <button
      id="book-button"
      style={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
