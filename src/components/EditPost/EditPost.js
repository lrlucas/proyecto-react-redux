import React, {Component} from 'react';
import Form from "../Form/Form";

class EditPost extends Component {

    state = {
        post: null
    };

    componentDidMount() {
        // recibimos los props del objeto post que nos pasaron
        // y lo metemos al state del componente
        this.setState({post: this.props.location.state.data})
    }


    // esta funcion sera la responsable de llamar a la api y mandar el post editado
    // aquies donde podemos llamar a un accion para mandar el post atravez de redux
    onSubmitEditPost = (post) => {
        console.log('EDIT POST');
        console.log(post)
        // al aprecer funciona
        // this.setState({
        //     post: post
        // })
    };


    render() {
        return (
            <div>
                {/* Le pasamos al componente Form el state que tiene el post que recibimos */}
                {/* Tambien le pasamos una funcion que recibira el post editado */}
                <Form post={this.state.post} titleForm='Editar Post' formSubmit={this.onSubmitEditPost}/>
            </div>
        );
    }
}

export default EditPost;
