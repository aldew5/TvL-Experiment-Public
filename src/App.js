import React from "react";
import './App.css';
import Landing from "./pages/Landing";
import { ExperimentProvider } from "./components/ExperimentContext";
import Experiment from "./pages/Experiment";

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <ExperimentProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />

          <Route path="/experiment"
            element={<Experiment />}
          />
        </Routes>
      </Router>
    </ExperimentProvider>

  );
}

export default App;
