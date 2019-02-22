import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/rbc-ie11-bug/dashboard">Dashboard</Link> -{" "}
          <Link to="/rbc-ie11-bug/calendar">Calendar</Link>
          <Route path="/rbc-ie11-bug/dashboard" component={Dashboard} />
          <Route path="/rbc-ie11-bug/calendar" component={Calendar} />
        </div>
      </Router>
    );
  }
}

export default App;