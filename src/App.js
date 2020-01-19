import React from 'react';
import './App.css';
import ThemeContextProvider from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import BookList from "./components/List";
import ThemeToggle from "./components/ThemeToggle";
import BookContextProvider from "./contexts/BookContext";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
        <ThemeToggle />
        <Navbar />
        <BookContextProvider>
          <BookForm />
          <BookList />
        </BookContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
