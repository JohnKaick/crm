import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Router from './views/app';
import registerServiceWorker from './registerServiceWorker';
import './content/app.css'
import './content/font-awesome/css/font-awesome.min.css'

injectTapEventPlugin();

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Router />
                </div>
            </MuiThemeProvider>
        );
    };
};


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
