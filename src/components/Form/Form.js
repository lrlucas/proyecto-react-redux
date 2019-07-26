import React from 'react';
import FormularioComponent from "../FormularioComponent/FormularioComponent";
import SweetAlert from "react-bootstrap-sweetalert";

class Form extends React.Component{

    // inicializamos el state
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            alert: null
        };

    }

    // esta funcion es la recibira el post editado y se la pasara el componente EditPost
    // tiene configurado el SweetAlert para confirmar si quere editar el post
    editPost = (data) => {
        console.log(this.state)
        const getAlert = () => (
            <SweetAlert
                success
                showCancel
                cancelBtnBsStyle="default"
                title='Desea editar este Post?'
                cancelBtnText="No"
                confirmBtnText="Yes"
                onConfirm={() => {
                    const post = {
                        title: data.title,
                        body: data.body
                    };
                    this.props.formSubmit(post)
                    this.hideAlert()
                }}
                onCancel={() => this.hideAlert()}
            >
            </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        })
    };

    // Esta funcion recibe el post editado y antes de mandarlo al componente NewPost
    // pregunta si quiere mandarlo.
    createNewPost = (data) => {

        const getAlert = () => (
            <SweetAlert
                success
                showCancel
                cancelBtnBsStyle="default"
                title='Desea Crear este Post?'
                cancelBtnText="No"
                confirmBtnText="Yes"
                onConfirm={() => {
                    const post = {
                        title: data.title,
                        body: data.body
                    };
                    this.props.formSubmit(post);

                    this.hideAlert()
                }}
                onCancel={() => this.hideAlert()}
            >
            </SweetAlert>
        );

        this.setState({
            alert: getAlert()
        })
    };

    // esta funcion es solo para ocultar el alert
    hideAlert = () => this.setState({alert: null});

    // aqui preguntamos si el props post es diferente a nulo
    // Si tenemos ese objeto le pasamos al FormComponent esa informacion
    // si tenemos esos props significa que queremos editarlo y por eso se lo pasamos al FormComponent

    // Si No tenemos le pasamos nuestro state con los campos de un post vacio
    // SI No tenemos esos props del post significa que no queremos editar nada solo queremos crear uno nuevo
    // y por eso le pasamos un objeto vacio para que ahi llene los datos del nuevo post.



    // en ambos casos tenemos que pasarle una funcion de submit que es donde recibiremos nuestra data de los
    // formularios
    renderForm = () => {
        if(this.props.post != null) {
            return (
                // #1 es aqui donde decidimos si pasar un objeto post a los props del componente
                <FormularioComponent titleForm='Formulario Editar' post={this.props.post} formSubmit={this.editPost}/>
            );
        }
        return (
            // #2 o le pasamos un objeto vacio  'mirese el props post en ambos componentes'
            <FormularioComponent titleForm='Formulario Crear' post={this.state} formSubmit={this.createNewPost}/>
        );
    };



    render() {
        return(
            <React.Fragment>
                {/*aqui solamente hacemos render del formulario y del alert*/}
                { this.renderForm() }
                { this.state.alert }
            </React.Fragment>
        );
    }
}

export default Form;
