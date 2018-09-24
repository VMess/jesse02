import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TemporaryDrawer from './components/TemporaryDrawer';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue,
  },
});

const links = [
  { isExact: true, linkTo: '/', text: 'Home' },
  { isExact: false, linkTo: '/logos', text: 'Logos' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <TemporaryDrawer links={links} />
            <Switch>
              <Route exact path='/' render={() => <h1>Home View</h1>} />
              <Route exact path='/logos' render={() => <h1>Logos View</h1>} />
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
          </MuiThemeProvider>
        </BrowserRouter>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
