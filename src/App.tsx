import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

import Home from "./routes/home";
import Project from "./routes/project";
import ScrollToTop from "./components/layout/ScrollToTop";

const App: React.FC = () => {
  return (
      <Router>
          <ScrollToTop />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Project} />
      </Router>
  );
};

export default App;
