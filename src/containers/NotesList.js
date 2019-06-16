import React, {Component} from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';
import CurrentNote from '../components/CurrentNote';
import {changeActiveNote} from '../actions/CurrentNoteActions';

const NotesBlock = {
    marginTop : "30px",
    paddingLeft : "unset",
    paddingRight : "unset"
};


class NotesList extends Component{
    render() {
        return(
            <div className="container" style={NotesBlock}>
                <div className="col-md-6">
                    <Notes notes={this.props.notes} />
                </div>
                <div className="col-md-6">
                    {this.props.currentNote.isActive ? <CurrentNote note={this.props.currentNote} /> : "Пожалуйста, выберите заметку"}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.default.notes.notes,
    currentNote: state.default.currentNote.currentNote
});



export default connect(mapStateToProps, {changeActiveNote})(NotesList);


