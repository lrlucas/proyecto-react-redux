import React, {Component} from 'react';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap'
import {connect} from "react-redux";
import {fetchPost} from "../actions";



class PostList extends Component {

    componentDidMount() {
        this.props.fetchPost()
    }

    editPost = (data) => {
      console.log('editar post')
      console.log(data)
    };

    deletePost = () => {
      console.log('eliminar post')
    };

    renderPostList = () => {
      return this.props.posts.map(post => {
          return(
              <tr key={post.id}>
                  <th scope="row">{post.id}</th>
                  <td>Mark</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                      <Button onClick={ () => this.editPost(post)} color="primary">Editar</Button>
                  </td>
                  <td>
                      <Button onClick={this.deletePost} color="danger">Delete</Button>
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
                        {this.renderPostList()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return { posts: state.posts }
};

export default connect(
    mapStateToProps,
    { fetchPost: fetchPost }
    )(PostList);
