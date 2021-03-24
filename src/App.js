import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';
import './index.css'
import {NavLink} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/"exact activeClassName="current">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about"exact activeClassName="current">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects"exact activeClassName="current">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact"exact activeClassName="current">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/">
                <Home />
            </Route>    
          </Switch>
        </main>
        <footer>
          &copy; 2021
        </footer>
      </div>
    </Router>
  );
}



