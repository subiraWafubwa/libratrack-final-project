# LibraTrack

LibraTrack is a React application designed to manage and track a book collection. It allows users to add, update, and delete books, as well as sort and filter them by various attributes. The application also includes a chat feature for user interaction.

## Features

- **Book Management**: Add new books, update existing ones, and delete books from the collection.
- **Sorting and Filtering**: Sort books by title, genre, author, or status. Filter books by title, genre, author, status, or ISBN.
- **Status Tracking**: View books categorized as "Currently Reading," "To be Read," or "Already Read."
- **Search Functionality**: Search for books by various attributes.
- **Chat Feature**: An interactive chat feature for user communication.

## Components

- **App**: The main component that manages the state for books, search, sorting, and conditional rendering of AddBook and UpdateBook components.
- **Header**: Contains the search input and chat toggle button. Displays the application title and logo.
- **MainBody**: Displays the status categories and book cards. Includes functionality to add and update books.
- **AddBook**: A form component for adding new books to the collection.
- **UpdateBook**: A form component for updating existing book details.
- **StatusBody**: Displays books categorized by their reading status.
- **CardBody**: Renders book cards with details and provides sorting options.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/libra-track.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```
   
3. Start the vite application:

   ```bash
   npm run dev
   ```
   The front-end should be available at [http:127.0.0.1:5173](http://127.0.0.1:5173).

3. Start the json-server server:

   ```bash
   npm run server
   ```

   The application will be available at [http://localhost:8001](http://localhost:8001).

4. Start the chat system server: Move to backend folder then run `npm start`:

   ```bash
   cd backend/ && npm start
   ```

   Your console should print the text: *(3001) : Chat server is running*

## API Endpoints

- **GET /books**: Fetch all books.
- **POST /books**: Add a new book.
- **PUT /books/:id**: Update a book by ID.
- **DELETE /books/:id**: Delete a book by ID.

## File Structure

- `src/`
  - `components/`
    - `Header.js`: Contains the header with search and chat functionality.
    - `MainBody.js`: Displays the main content with book cards and status categories.
    - `AddBook.js`: Form for adding a new book.
    - `UpdateBook.js`: Form for updating an existing book.
    - `StatusBody.js`: Shows books categorized by status.
    - `CardBody.js`: Renders book cards and sorting options.
  - `form_components/`
    - `ISBN.js`: Form field for ISBN input.
    - `Title.js`: Form field for book title.
    - `Genre.js`: Form field for book genre.
    - `Author.js`: Form field for book author.
    - `StatusPage.js`: Form field for book status and total pages.
    - `ImageURL.js`: Form field for book cover image URL.
    - `BookmarkedPage.js`: Form field for bookmarked page.
    - `BookFormButton.js`: Button component for form actions.
  - `index.js`: Entry point of the application.
  - `index.css`: Global styles for the application.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## Acknowledgements

- Icons and assets are sourced from various free resources.
- React and its ecosystem for the powerful front-end development capabilities.

---

For any issues or questions, please open an issue on the [GitHub repository](https://github.com/your-username/libra-track/issues).
