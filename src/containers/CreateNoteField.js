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
        this.props.addNote(this.state.title, this.state.description);
    };


    render() {
        return (
            <div>
                <input type="text" placeholder="Наименование" onChange={this.handleTitle}/>
                <textarea placeholder="Описание заметки" onChange={this.handleDescription}></textarea>
                <button onClick={this.createNote}>Добавить заметку</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.notes.notes
});

export default connect(mapStateToProps, {addNote})(CreateNoteField);