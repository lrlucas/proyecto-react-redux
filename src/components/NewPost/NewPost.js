import React, {Component} from 'react';
import FormComponent from "../Form/Form";

class NewPost extends Component {

    createNewPost = (post) => {
        console.log('NEW POST')
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
