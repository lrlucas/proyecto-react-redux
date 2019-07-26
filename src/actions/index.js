import jsonPlaceHolder from "../api/jsonPlaceHolder";

//aqui creamos nuestra accion que disparara una dispatch asincrono
// para traer los datos del todos los post
export const fetchPost = () => {

  return async (dispatch) => {
      const response = await jsonPlaceHolder.get('/posts');
      dispatch({
          type: 'FETCH_POSTS',
          payload: response.data
      });
  }

};
