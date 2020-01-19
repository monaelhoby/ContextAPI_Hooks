import React, {useContext} from "react";
import {BookContext} from "../contexts/BookContext";
import action from "../reducers/actions";

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);
    return(
        <div onClick={() => dispatch(action.RemoveBooksAction(book.id))}>
        {/* <div onClick={() => dispatch({type:"REMOVE_BOOK",id:book.id})}> */}
        <p className="title">{book.title}</p>
        <span className="author">{book.author}</span>
        </div>
    )
}

export default BookDetails