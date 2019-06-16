import  * as types from "../constants/ActionCurrentNoteBookTypes";

export function changeActiveNote(note) {
    return {
        type : types.CHANGE_ACTIVE_NOTE,
        id : note.id,
        title : note.title,
        description : note.description
    }
}