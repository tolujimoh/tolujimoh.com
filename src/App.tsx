import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Home from "./routes/home";
import Project from "./routes/project";

const App: React.FC = () => {
  return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
      </Router>
  );
}

export default App;
