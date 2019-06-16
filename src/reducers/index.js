import { combineReducers } from 'redux';
import notes from "./notes";
import currentNote from "./currentNote";


export default combineReducers({
    currentNote,
    notes
})


