import React from 'react';
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";
import styled from 'styled-components';


class FormularioComponent extends React.Component{

    state = {
        title: '',
        body: ''
    };

    // La funcion onSubmit crear un objeto con los valores de los inputs y los pasa a la funcion que recibe por
    // props que se llama formSubmit y le pasa el objeto con los valores de los inputs

    // en cualquier caso que sea Editar un Post o Crear un Post
    // la funcion le pasara un objeto con los valores del formulario
    onSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: this.state.title,
            body: this.state.body,
        };
        this.props.formSubmit(data);
    };

    // estos metodos setean al state los nuevos valores de los inputs
    handleTitleChange = (e) => this.setState({title: e.target.value});
    handleBodyChange = (e) => this.setState({body: e.target.value});

    // Este metodo es importante porque recibe los props y los setea al state de nuestro componente
    componentWillReceiveProps = (nextProps) => {
      this.setState({
          title: nextProps.post.title,
          body: nextProps.post.body
      })
    };

    render() {
        return (
            <React.Fragment>
                <h2>{this.props.titleForm}</h2>
                <form onSubmit={this.onSubmit}>
                    <FormGroup>
                        {/* Una vez que la data de los props esta en el state, podemos usarlo en el value de nuestros input*/}
                        {/* Luego usamos el evento onChange para recojer la data de los input*/}
                        <Label for="title">Title</Label>
                        <Input type="text" name="title"
                               id="title" placeholder="Escribre el titulo del post" autoComplete="off"
                               value={this.state.title} onChange={this.handleTitleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="body">Contenido</Label>
                        <Input type="textarea" name="body"
                               id="body" rows="5" autoComplete="off"
                               value={this.state.body} onChange={this.handleBodyChange}
                        />
                    </FormGroup>
                    <Button type="submit" outline color="success">Crear post</Button>
                </form>
            </React.Fragment>
        );
    }
}

export default FormularioComponent;
