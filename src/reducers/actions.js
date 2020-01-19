
export const  types = {
 AddBooks : "ADD_BOOK",
 RemoveBook : "REMOVE_BOOK"
}


const actions = {

    AddBooksAction : (title,author) => ({
        type: types.AddBooks,
        book:{title,author}
    }),
    RemoveBooksAction : id => ({
        type: types.RemoveBook,
        id
    })
}

export default actions 