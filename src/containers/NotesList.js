import React, {Component} from 'react';
import { connect } from 'react-redux';
import Notes from '../components/Notes';
import CurrentNote from '../components/CurrentNote';
import {changeActiveNote} from '../actions/CurrentNoteActions';
import {changeNode} from '../actions/NoteActions';

const NotesBlock = {
    marginTop : "30px",
    paddingLeft : "unset",
    paddingRight : "unset"
};



class NotesList extends Component{

    state = {
        isActive : false,
        currentNote : this.props.currentNote
    };



    handleActiveNote = (item) => {

        this.props.changeActiveNote(item);

        setTimeout( () => {
            this.setState({
                isActive : true,
                currentNote : this.props.currentNote
            });
        }, 0);
    };

    changeNote = (item) => {
        this.props.changeNode(item);
        this.setState({
            isActive : false
        });
    };



    render() {
        return(
            <div className="container" style={NotesBlock}>
                <div className="col-md-6">
                    <Notes notes={this.props.notes} handleActiveNote={ this.handleActiveNote } />
                </div>
                <div className="col-md-6">
                    {this.state.isActive ? <CurrentNote note={this.state.currentNote} changeNote={this.changeNote} /> : "Выберите заметку"}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.default.notes.notes,
    currentNote: state.default.currentNote.currentNote
});



export default connect(mapStateToProps, {changeActiveNote, changeNode})(NotesList);


