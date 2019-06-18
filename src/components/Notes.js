import React, {Component} from 'react';
import "./Notes.css";

class Notes extends Component{


    render() {
        return(
            <ul className="list-group">
                {this.props.notes.map( (item , i) => {
                    return <li onClick={ () => this.props.handleActiveNote(item) }
                               className="list-group-item note-item"
                               key={i}> {item.title}
                               <span className="glyphicon glyphicon-trash" onClick={ () => this.props.deleteNote(item) }></span>
                    </li>
                })}
            </ul>
        );
    }
}





export default Notes;


