import * as types from '../constants/ActionCurrentNoteBookTypes';

const initialState = {
    currentNote : {
        isActive : false
    }
};

export default function currentNote(state = initialState , action) {
    switch (action.type) {
        case types.CHANGE_ACTIVE_NOTE:

            let isActive = state.currentNote.isActive;

            if (!isActive){
                isActive = !isActive;
            }

            return {
                ...state,
                currentNote : {
                    isActive: isActive,
                    id : action.id,
                    title : action.title,
                    description : action.description
                }
            };
        default:
            return state;
    }
}


