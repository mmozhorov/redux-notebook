import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addNote} from '../actions/NoteActions';

class CreateNoteField extends Component{

    constructor(props){
        super(props);
        this.state={
            title : "",
            description : ""
        };
    }


    handleTitle = (e) => {
        this.setState({
            title : e.target.value
        });
    };

    handleDescription = (e) => {
        this.setState({
            description : e.target.value
        });
    };

    createNote = (e) => {
        if (this.state.title !=="" && this.state.description !==""){
            this.props.addNote(this.state.title, this.state.description);
            this.clearInput();
        }
        else {
            alert("Пожадуйста, заполните соответствующие поля");
        }
    };

    clearInput = () => {
        this.setState({
            title : "",
            description : ""
        })
    };



    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="inputsm">Название заметки:</label>
                    <input className="form-control input-sm" id="inputsm" type="text" onChange={this.handleTitle} value={this.state.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea3">Описание заметки:</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea3"
                        rows="7"
                        value={this.state.description}
                        onChange={this.handleDescription}>
                    </textarea>
                </div>
                <button onClick={this.createNote} className="btn btn-success">Добавить заметку</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.default.notes.notes
});

export default connect(mapStateToProps, {addNote})(CreateNoteField);