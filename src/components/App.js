import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Appbar from "./Appbar/Appbar";
import PostList from "./PostList/PostList";
import NewPost from "./NewPost/NewPost";
import EditPost from "./EditPost/EditPost";

// aqui tenemos las rutas basicas de nuestra app
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <div>
              {/* Al componente appbar le pasamos un prop con el titulo de la app*/}
              <Appbar title='EDteam'/>

              {/* Esta ruta muestra la lista de todos los post */}
              <Route path='/' exact component={PostList}/>

              {/* Esta ruta es para crear un nuevo post */}
              <Route path='/newpost' component={NewPost}/>

              {/* Esta ruta es para editar un post */}
              <Route path='/editpost' component={EditPost}/>
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
