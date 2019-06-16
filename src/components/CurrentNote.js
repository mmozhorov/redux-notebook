import React, {Component} from 'react';
import './CurrentNote.css';

class CurrentNote extends Component{

    constructor(props){
        super(props);

        console.log(this.props);
        let title = this.props.note.title;
        let description = this.props.note.description;

    }



    handleTitle = (e) => {
        console.log(e.target.value);
        this.setState({
            title : e.target.value
        });
    };

    handleDescription = (e) => {
        this.setState({
            description : e.target.value
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
                           value={this.title}
                           onChange={this.handleTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea3">Описание заметки:</label>
                    <textarea
                        onChange={this.handleDescription}
                        value={this.description}
                        className="form-control"
                        id="exampleFormControlTextarea3"
                        rows="7">
                    </textarea>
                </div>
                <button className="btn btn-warning btn-block note-change">Изменить</button>
            </div>
        );
    }
}

export default CurrentNote;