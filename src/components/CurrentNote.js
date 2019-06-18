import React, {Component} from 'react';
import './CurrentNote.css';

class CurrentNote extends Component{

    constructor(props){
        super(props);
        this.state = {
            note : this.props.note
        };

    }

    componentWillReceiveProps(nextProps) {
                this.setState({
                    note : nextProps.note
                });
    }

    handleTitle = (e) => {

        const note = {
            ...this.state.note,
        };

        note.title = e.target.value;

        this.setState({
            note : note
        });
    };

    handleDescription = (e) => {

        const note = {
            ...this.state.note,
        };

        note.description = e.target.value;

        this.setState({
            note : note
        });
    };

    render() {
        return(
            <div>
                <div className="form-group">
                    <label htmlFor="inputsm">Название заметки:</label>
                    <input className="form-control input-sm"
                           id="inputsm"
                           type="text"
                           value={this.state.note.title}
                           onChange={this.handleTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea3">Описание заметки:</label>
                    <textarea
                        onChange={this.handleDescription}
                        value={this.state.note.description}
                        className="form-control"
                        id="exampleFormControlTextarea3"
                        rows="7">
                    </textarea>
                </div>
                <button onClick={ () => this.props.changeNote(this.state.note)} className="btn btn-warning btn-block note-change">Изменить</button>
            </div>
        );
    }
}

export default CurrentNote;