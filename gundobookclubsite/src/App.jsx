// src/App.jsx
import React from 'react';
import './global.css';

const books = [
  { title: 'Book 1', cover: 'https://via.placeholder.com/150x200.png?text=Book+1' },
  { title: 'Book 2', cover: 'https://via.placeholder.com/150x200.png?text=Book+2' },
  { title: 'Book 3', cover: 'https://via.placeholder.com/150x200.png?text=Book+3' },
  { title: 'Book 4', cover: 'https://via.placeholder.com/150x200.png?text=Book+4' },
  // Add more book entries as needed
];

const App = () => {
  return (
    <div>
      <header className="fullscreen-header">
        <h1>Gundo Book Club</h1>
      </header>
      <section className="book-section">
        {books.map((book, index) => (
          <div className="book" key={index}>
            <img src={book.cover} alt={book.title} />
            <div className="book-title">{book.title}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
