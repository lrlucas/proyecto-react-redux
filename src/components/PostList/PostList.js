import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap'
import {connect} from "react-redux";
import {fetchPost} from "../../actions";
// #1 importamos la funcion connect y nuestra accion fetchPost


class PostList extends Component {

    componentDidMount() {
        // #4 luego podemos llamar a la accion atraves de los props de nuestro componente
        this.props.fetchPost()
    }

    editPost = (data) => {
        // aqui nos movemos al componente EditPost y le pasamos el post que queremos editar
      this.props.history.push('/editpost', {data:data})
    };

    deletePost = (post) => {
      console.log('eliminar post')
      console.log(post)
    };

    // unva ves que tengamos la data de todos los post
    // podemos hacer un .map sobre ese array y mostrar uno por uno cada objeto del array
    renderPostList = () => {
      return this.props.posts.map(post => {
          return(
              <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td>Mark</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                      {/* aqui llamos al onClick y le paso el post para editar */}
                      <Button onClick={ () => this.editPost(post)} color="primary">Editar</Button>
                  </td>
                  <td>
                      <Button onClick={() => this.deletePost(post)} color="danger">Delete</Button>
                  </td>
              </tr>
          )
      })
    };

    render() {
        return (
            <div className="container-fluid">
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* llamamos a la funcion renderPostList para que nos muestre los post*/}
                        {this.renderPostList()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

// mapeamos el state a los props del componente
const mapStateToProps = (state) => {
  return { posts: state.posts }
};

// #2 luego de importar necesitamos conectar nuestra funcion connect con nuestro componente
// #3 despues necesitamos pasar a los props del componente la accion fetchPost, eso lo hacemos
// con la funcion mapStateToProps
export default connect(
    mapStateToProps,
    { fetchPost: fetchPost }
    )(PostList);
