import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Appbar from "./Appbar";
import PostList from "./PostList";
import NewPost from "./NewPost";


const App = () => {
  return (
    <div>
      <BrowserRouter>
          <div>
              <Appbar title='EDteam'/>
              {/* listado de post editar y eliminar */}
              <Route path='/' exact component={PostList}/>
              {/*  crear nuevo post 1 formulario reutilizable  */}
              <Route path='/newpost' component={NewPost}/>
              {/*    */}
              {/*    */}
          </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
