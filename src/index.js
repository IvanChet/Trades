import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Container from './components/container';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

import './index.css';

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('root'));
registerServiceWorker();
