import * as types from "../constants/ActionNoteBookTypes";

export function addNote(name) {
    return {
        type : types.ADD_NOTE,
        name
    };
}

export function deleteNode(id) {
    return {
        type : types.DELETE_NOTE,
        id
    };
}

export function changeNode(id) {
    return {
        type : types.CHANGE_NOTE,
        id
    }
}