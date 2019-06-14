import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components/layout/Index'

import { Provider } from './Context';
class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Index} />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App; 