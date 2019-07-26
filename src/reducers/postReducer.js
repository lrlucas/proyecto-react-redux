

// nuestro reducer que inicializa el state en un array vacio
// y en nuestro action.payload devuelve la data de nuestro accion
// que traera la data de todos los post
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};
