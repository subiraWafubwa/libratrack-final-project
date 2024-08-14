export default function StatusPage() {
  return (
    <div id="status-page">
      <p>Status: </p>
      <select defaultValue="to_be_read">
        <option value="to_be_read">To be Read</option>
        <option value="currently_reading">Currently Reading</option>
        <option value="already_read">Already Read</option>
      </select>
      <p>Total Pages: </p>
      <input placeholder="Total Pages" />
    </div>
  );
}
