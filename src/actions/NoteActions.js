import * as types from "../constants/ActionNoteBookTypes";

export function addNote(title, description) {
    return {
        type : types.ADD_NOTE,
        title,
        description
    };
}

export function deleteNode(id) {
    return {
        type : types.DELETE_NOTE,
        id
    };
}

export function changeNode(note) {
    return {
        type : types.CHANGE_NOTE,
        id : note.id,
        title : note.title,
        description : note.description
    }
}