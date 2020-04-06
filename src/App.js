import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import HomeContainer from "./pages/home/Container";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
