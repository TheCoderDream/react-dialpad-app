import React, { Component } from 'react';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers';
import {createStore} from "redux";
import Dialpad from "./src/containers/Dialpad/Dialpad";
import DeleteIcon from "./src/assets/icons/delete.svg";


const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <div className={'app-container'}>
                <Dialpad/>
            </div>
        </Provider>
    )
    ;
  }
}

export default App;

