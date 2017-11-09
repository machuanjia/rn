/**

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// jsx
// import App from './demo/jsx';

//component
// import App from './demo/component';


// //复合组件
import App from './demo/component-mix'

// import App from './demo/board';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name="macj" job="coding" title="title"/>, document.getElementById('root'));
// ReactDOM.render(<App name="macj" job="coding" title="title"/>, document.getElementById('root'));
// ReactDOM.unmountComponentAtNode(document.getElementById('root'))

registerServiceWorker();

**/



// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import App from './demo-redux/containers/app';
// import configureStore from './demo-redux/store/configureStore'
//
// import registerServiceWorker from './registerServiceWorker';
//
// const store = configureStore();
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//     , document.getElementById('root'));
// registerServiceWorker();






import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './demo-todo/containers/app';
import configureStore from './demo-todo/store/configureStore'
import registerServiceWorker from './registerServiceWorker';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();