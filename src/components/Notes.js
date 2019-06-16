import React, {Component} from 'react';
import { connect } from 'react-redux';
import {changeActiveNote} from '../actions/CurrentNoteActions';
import "./Notes.css";

class Notes extends Component{

    handleActiveNote = (item) => {
        this.props.changeActiveNote(item);
    };

    render() {
        return(
            <ul className="list-group">
                {this.props.notes.map( (item , i) => {
                    return <li onClick={ () => this.handleActiveNote(item) } className="list-group-item note-item" key={i}>{item.title}</li>
                })}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    notes: state.default.notes.notes,
    currentNote: state.default.currentNote.currentNote
});



export default connect(mapStateToProps, {changeActiveNote})(Notes);


