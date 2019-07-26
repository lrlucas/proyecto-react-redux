import {combineReducers} from "redux";
import postReducer from "./postReducer";

// aqui solamente configuramos el combineReducer para poder
// usarlo en nuestro componente
// la key 'posts' de este archivo es la misma
// que esta en el componente PostList en la funcion mapStateToProps 'la key que esta dentro del return'
export default combineReducers({
    posts: postReducer
});
