import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./routes/home";
import Project from "./routes/project";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/project" component={Project} />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
