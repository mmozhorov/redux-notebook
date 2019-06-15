import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NoteActions from '../actions/NoteActions';

class NotesList extends Component{

    render() {
        return(
            <div>
                <ul>
                    {this.props.notes.map( (item , i) => {
                        return <li key={i}>{item.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes.notes
});


export default connect(mapStateToProps)(NotesList);