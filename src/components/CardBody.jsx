import add from "../../assets/add.png";

export default function CardBody() {
  return (
    <div className="card-body">
      <div className="card-body-top-bar">
        <h2>You have "this" books in your collection</h2>
        <select defaultValue="title">
          <option value="title">Sort by title</option>
          <option value="last_updated">Sort by last updated</option>
          <option value="genre">Sort by genre</option>
          <option value="author">Sort by author</option>
          <option value="status">Sort by status</option>
        </select>
      </div>
      <div className="card-body-main">
        {/* Where to add cards */}
        <button id="add-book">
          <img src={add} alt="plus image" />
        </button>
      </div>
    </div>
  );
}
