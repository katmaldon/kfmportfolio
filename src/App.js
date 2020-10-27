import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import NavBar from "./Components/Navbar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={Home}>
                        <Homet />
                    </Route>
                    <Route path="/about" component={About}>
                        <About />
                    </Route>
                    <Route path="/projects" component={Projects}>
                        <Projects />
                    </Route>
                    <Route path="/contact" component={Contact}>
                        <Contact />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
