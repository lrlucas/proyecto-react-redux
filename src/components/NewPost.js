import React, {Component} from 'react';
import FormComponent from "./FormComponent";

class NewPost extends Component {

    createNewPost = (post) => {
        console.log(post)
    };

    render() {
        return (
            <div className="container-fluid">
                <FormComponent titleForm="Crear Nuevo Post" formSubmit={this.createNewPost}/>
            </div>
        );
    }
}

export default NewPost;
