import React from "react";
import "./App.css";
import Landing_Page from "./components/Landing_page";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Courses from "./components/Courses";
import Course from "./components/Course";
import User from "./components/User";
import Create from "./components/Create";
import Config from "./components/Config";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing_Page} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/user" component={User} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/course/:id" component={Course} />
        <Route exact path="/config/:id" component={Config} />
      </Switch>
    </div>
  );
}

export default App;
