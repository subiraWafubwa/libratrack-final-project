import search from "../../../assets/white_search.png";

export default function ISBN() {
  return (
    <div id="isbn">
      <p>ISBN:</p>
      <input placeholder="Add book details using ISBN CODE" />
      <button>
        <img src={search} />
      </button>
    </div>
  );
}
