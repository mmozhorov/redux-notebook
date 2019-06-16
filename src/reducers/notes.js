import * as types from '../constants/ActionNoteBookTypes';

const initialState = {
    notes : [
         {
            id : 1,
            title : "Сходить за продуктами",
            description : "Купить мясо, морс и рис"
        },

        {
            id : 2,
            title: "Сходить в зал",
            description : "Потренироваться и помыться"
        },

        {
            id : 3,
            title: "Отдых",
            description : "Почитать и поболтать с близкими"
        },

        {
            id : 4,
            title : "Работа",
            description : "Разобраться как работает Redux"
        }
    ]
};



export default function notes(state = initialState, action) {
    switch (action.type) {
        case types.ADD_NOTE:
            const newId = (state.notes.length-1)+1;
            const newNote = {
                id : newId,
                title : action.title,
                description : action.description
            };
            return {
                ...state,
                notes : [
                    ...state.notes,
                    newNote
                ]
            };

        case types.DELETE_NOTE:
            const newNotes = state.notes.filter(item => item.id !== action.id);
            return {
                ...state,
                notes : newNotes
            };

        default:
            return state;
    }
}