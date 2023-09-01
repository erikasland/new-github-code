import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavLink from './components/NavLink/NavLink';
import Home from './components/Home/Home';
import About from './components/About/About';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <NavLink />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route path="/about/:name">
                  <About />
                </Route>
                <Route exact path="/photos">
                  <Photos />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          {/* browser router */}
        </div>
      </Router>
  );
}

export default App;
