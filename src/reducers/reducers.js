import {types} from "./actions";
import uuid from "uuid/v1";


 const bookReducers = (state, action) => {
  switch(action.type){
      case types.AddBooks:
          return [...state,{title:action.book.title,author:action.book.author,id:uuid()}];
      case types.RemoveBook:
          return state.filter(book => book.id !== action.id);
      default :
          return state
  }
}

export default bookReducers