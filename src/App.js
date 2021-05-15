import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Introduction from "./components/pages/introduction";
import Topnav from "./components/nav/topnav";
import About from "./components/pages/about";
import Project from "./components/pages/projects";
import Footer from "./components/footer/footer";
import Contact from "./components/pages/contact";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Topnav />
          <Route exact path="/" component={Introduction} />
          <Route exact path="/home" component={Introduction} />
          <Route exact path="/about" component={About} /> 
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
