import React from "react";
import './App.css';
import Landing from "./pages/Landing";
import { ExperimentProvider } from "./components/ExperimentContext";
import Experiment from "./pages/Experiment";

import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

function App() {

  return (
    <ExperimentProvider>
      <Router>
        <Switch>
          <Route
            exact path="/"
            component={Landing}
          />

          <Route path="/experiment"
            component={Experiment}
          />
        </Switch>
      </Router>
    </ExperimentProvider>

  );
}

export default App;
