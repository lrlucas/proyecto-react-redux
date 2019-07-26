import axios from "axios";


// seteamos la url base de nuestro endpoint
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});
