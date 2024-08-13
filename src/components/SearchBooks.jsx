import React, {useState, useEffect} from 'react';

//Book component to display individual book details
const Book = ({title, author, cover_photo_url}) => (
    <div className = "book">
        <img src = {cover_photo_url} alt = {title} className ="book-cover"/>
        <h3>{title}</h3>
        <p>{author}</p>
    </div>
);

const SearchBooks = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //Fetch books from the db.json

    useEffect(()=>{
        fetch("http://localhost:8001/books")
        .then((response) => {
            if(!response.ok){
                throw new Error ('Network response was not ok');
            }
            return response.json();
        })
        .then((data)=> {
            setBooks(data.books);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    },[]);
//Function to handle search input changes

const handleSearch = (e) => {
    setQuery(e.target.value);
};

//Filter books based on the search query

const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
);

if (loading) return <p>Loading...</p>

if (error) return <p>Error: {error}</p>

return (
    <div className = "search-books">
        <input
            type="text"
            placeholder="Search for books..."
            value={query}
            onChange = {handleSearch}
            className = "search-input"            
            />
        <div className="books-list">
            {filteredBooks.length >0?(
            filteredBooks.map((book) =>  (
                <Book 
                key = {book.id}
                title = {book.title}
                author={book.author}
                cover_photo_url={book.cover_photo_url}
                />
            ))): (<p>No books found</p> )}

        </div>
    </div>
);

};

export default SearchBooks;

