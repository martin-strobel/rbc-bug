import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calendar from "./components/Calendar";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/dashboard">Dashboard</Link> -{" "}
          <Link to="/calendar">Calendar</Link>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/calendar" component={Calendar} />
        </div>
      </Router>
    );
  }
}

export default App;