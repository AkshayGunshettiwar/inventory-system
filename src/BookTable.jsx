import React, { useState } from 'react';
import './BookTable.css'


import booksData from './books.json'

const BookTable = () => {

  const [books, setBooks] = useState(booksData);
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '', image: '', content:''});
  const [editingIndex, setEditingIndex] = useState(-1);
  const [selectedBook, setSelectedBook] = useState(null); 

  const handleAddBook = () => {
    if (newBook.title && newBook.author && newBook.year && newBook.image && newBook.content) {
      setBooks([...books, newBook]);
      setNewBook({ title: '', author: '', year: '', image: '', content:'' });
    }
  };

  const handleEditBook = (index) => {
    setEditingIndex(index);
    setNewBook(books[index]);
  };

  const handleSaveBook = () => {
    const updatedBooks = [...books];
    updatedBooks[editingIndex] = newBook;
    setBooks(updatedBooks);
    setNewBook({ title: '', author: '', year: '', image: '' ,content:''});
    setEditingIndex(-1);
  };

  const handleDeleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleBookClick = (index) => {
    setSelectedBook(books[index]); 
  };

  const clearSelectedBook = () => {
    setSelectedBook(null); 
  };



  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>Book Inventory Management</h1>
      <div className="book-cards">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img onClick={() => handleBookClick(index)} src={book.image} alt={`Cover of ${book.title}`} className="book-image" />
            <h3 onClick={() => handleBookClick(index)} className="book-title">
              {book.title}
            </h3>
            <p className="book-info">Author: {book.author}</p>
            
            <div className="button-group">
              <button className="edit-button" onClick={() => handleEditBook(index)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDeleteBook(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
      {editingIndex === -1 ? (
        <div>
          <h2>Add New Book</h2>
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Content"
            value={newBook.content}
            onChange={(e) => setNewBook({ ...newBook, content: e.target.value })}
          />
          <input
            type="text"
            placeholder="Year"
            value={newBook.year}
            onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBook.image}
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          />
          <button onClick={handleAddBook}>Add</button>
        </div>
      ) : (
        <div>
          <h2>Edit Book</h2>
          <input
            type="text"
            placeholder="Title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input
            type="text"
            placeholder="Year"
            value={newBook.year}
            onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newBook.image}
            onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
          />
          <input
            type="text"
            placeholder="Content"
            value={newBook.content}
            onChange={(e) => setNewBook({ ...newBook, content: e.target.value })}
          />
          <button onClick={handleSaveBook}>Save</button>
          <button onClick={() => setEditingIndex(-1)}>Cancel</button>
        </div>
      )}
      </div>
      {selectedBook && (
        <div className="selected-book">
          <h2>Selected Book</h2>
          <img src={selectedBook.image} alt={`Cover of ${selectedBook.title}`} className="book-image" />
          <p>Title: {selectedBook.title}</p>
          <p>Author: {selectedBook.author}</p>
          <p>Content: {selectedBook.content}</p>
          <p>Year: {selectedBook.year}</p>
          <button onClick={clearSelectedBook}>Clear</button>
        </div>
      )}
    </div>
  );
};

export default BookTable;
