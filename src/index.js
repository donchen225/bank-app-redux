import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/index.js';

const render = () => { 
    ReactDOM.render(<App />, document.getElementById('root'))
};
render();
// subscribe to store updates
store.subscribe(render);

registerServiceWorker(); 
