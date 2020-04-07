import "../scss/index.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Members from "./Members";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
          <Route path="*" component={NotFound} />{" "}
          {/* this need needs to come after all other routes */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
