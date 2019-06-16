import React, {Component} from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as reducers from '../reducers';
import NotesList from './NotesList';
import CreateNoteField from './CreateNoteField';
import 'bootstrap3/dist/css/bootstrap.css';


const reducer = combineReducers(reducers);
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component{

    render() {


        // store.dispatch(addNote('Подумать', "Подумать о границах нашего разума"));
        //
        // store.dispatch(deleteNode(1));



        return(
            <Provider store={store}>
                <div className="container">
                    <CreateNoteField/>
                    <NotesList/>
                </div>
            </Provider>
        )
    }

}

export default App;

