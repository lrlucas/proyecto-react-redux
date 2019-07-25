import React from 'react';
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import Button from "reactstrap/es/Button";

class FormComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

    }

    createNewPost = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };
        this.props.formSubmit(post)
    };



    render() {
        return(
            <React.Fragment>
                <h2>{this.props.titleForm}</h2>
                <form onSubmit={ this.createNewPost}>
                    <FormGroup>
                        <Label for="title">Email</Label>
                        <Input type="text" name="title"
                               id="title" placeholder="Escribre el titulo del post" autoComplete="off"
                               value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})}/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="body">Contenido</Label>
                        <Input type="textarea" name="body" id="body" rows="5" autoComplete="off"
                               value={this.state.body} onChange={(e) => this.setState({body: e.target.value})}/>
                    </FormGroup>
                    <Button type="submit" outline color="success">Crear post</Button>
                </form>
            </React.Fragment>
        );
    }
}

export default FormComponent;
