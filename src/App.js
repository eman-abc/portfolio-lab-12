import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <div className="container-fluid">
        {/* Header remains static */}
        <Header />

        {/* Main Content */}
        <Routes>
          {/* Home page with all sections except Projects */}
          <Route
            path="/"
            element={
              <div>
                <Summary />
                <Skills />
                <Education />
                <Experience />
                <Certifications />

                {/* Link to Projects */}
                <div className="text-center mt-4">
                  <Link to="/projects" className="btn btn-primary">
                    View Projects
                  </Link>
                </div>
              </div>
            }
          />

          {/* Separate route for Projects */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
