import "../scss/index.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Members from "./Members";
import About from "./about";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/about" component={About} />
          {/* this need needs to come after all other routes */}
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
