import React, {useState, useContext} from "react";
import {BookContext} from "../contexts/BookContext";
import {ThemeContext} from "../contexts/ThemeContext";
import action from "../reducers/actions";

const BookForm = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const {dispatch} = useContext(BookContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext) ;
    const theme = isLightTheme ? light : dark ;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(action.AddBooksAction(title,author));
        // dispatch({type:"ADD_BOOK",book:{title,author}})
        setTitle("");
        setAuthor("")
    }

    return (
        <form onSubmit={handleSubmit}  style={{background:theme.ui,color:theme.syntax}}>
            <input type="text" placeholder="book title" value={title} required onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="book author" value={author} required onChange={e => setAuthor(e.target.value)} />
            <input type="submit" value="Add Book" />
        </form>

    )
}

export default BookForm