import React, { useState } from 'react';
import BarcodeScannerComponent from 'react-qr-barcode-scanner';
import "./scan.css";

const ISBNScanner = () => {
  const [isbn, setIsbn] = useState('');
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState('');

  const validateISBN = (isbn) => {
    let checksum = 0;
    if (isbn.length === 10) {
      // Validate ISBN-10
      for (let i = 0; i < 9; i++) {
        checksum += (10 - i) * parseInt(isbn[i]);
      }
      const checkDigit = (11 - (checksum % 11)) % 11;
      return checkDigit === parseInt(isbn[9]) || (checkDigit === 10 && isbn[9] === 'X');
    } else if (isbn.length === 13) {
      // Validate ISBN-13
      for (let i = 0; i < 12; i++) {
        checksum += parseInt(isbn[i]) * (i % 2 === 0 ? 1 : 3);
      }
      const checkDigit = (10 - (checksum % 10)) % 10;
      return checkDigit === parseInt(isbn[12]);
    }
    return false;
  };

  const fetchBookDetails = async (isbn) => {
    try {
      const response = await fetch('http://localhost:8001/books');
      const data = await response.json();
      if (data.totalItems > 0) {
        setBookDetails(data.items[0].volumeInfo);
        setError('');
      } else {
        setError('No book details found for this ISBN.');
      }
    } catch (error) {
      setError('Error fetching book details.');
    }
  };

  const handleScan = (result) => {
    if (result) {
      const scannedISBN = result.text;
      setIsbn(scannedISBN);
      if (validateISBN(scannedISBN)) {
        fetchBookDetails(scannedISBN);
      } else {
        setError('Invalid ISBN format.');
        setBookDetails(null);
      }
    }
  };

  return (
    <div className="scanner-container">
      {/* <h2>ISBN Scanner</h2> */}
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => handleScan(result)}
      />
      <p>Scanned ISBN: {isbn}</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bookDetails && (
        <div>
          <h3>Book Details:</h3>
          <p><strong>Title:</strong> {bookDetails.title}</p>
          <p><strong>Author(s):</strong> {bookDetails.authors?.join(', ')}</p>
          <p><strong>Publisher:</strong> {bookDetails.publisher}</p>
          <p><strong>Published Date:</strong> {bookDetails.publishedDate}</p>
          <p><strong>Description:</strong> {bookDetails.description}</p>
          <img src={bookDetails.imageLinks?.thumbnail} alt="Book cover" />
        </div>
      )}
    </div>
  );
};

export default ISBNScanner;
