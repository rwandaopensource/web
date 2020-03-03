import '../scss/index.scss';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={NotFound} /> {/* this need needs to come after all other routes */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
