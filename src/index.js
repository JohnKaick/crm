import React from 'react';
import ReactDOM from 'react-dom';
import App from './template/app';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './content/app.css';
import './content/font-awesome/css/font-awesome.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
