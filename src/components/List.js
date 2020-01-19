import React, {useContext} from "react";
import {ThemeContext} from "../contexts/ThemeContext";
import {BookContext} from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {

    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {books} = useContext(BookContext);
    const theme = isLightTheme ? light : dark ;

    return (
        <div className="book-list" style={{background:theme.bg,color:theme.syntax}}>
            {books.length ? (
            <ul>
                {books.map(book => {
                return <li key={book.id} style={{background:theme.ui}}><BookDetails book={book}/></li>
            })}
            </ul>
            ):(
                <div className="empty" style={{background:theme.ui}}>No Books to read</div>
            )
        } 
        </div>
    );
}

export default BookList













