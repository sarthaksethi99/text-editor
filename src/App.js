import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/index";
import HtmltoTextPage from "./Pages/htmltotext"
import TexttoHtmlPage from "./Pages/texttohtml"
import './App.css';

function App() {
  return (
    <>
      <Router basename='/text-editor'>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/htmltotext" component={HtmltoTextPage} exact />
          <Route path="/texttohtml" component={TexttoHtmlPage} exact />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
