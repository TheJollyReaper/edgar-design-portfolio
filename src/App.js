import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import ProjectGrid from './Components/ProjectGrid/ProjectGrid.js'
import NatureStewards from './Components/Projects/nature-stewards/nature-stewards.js'
import About from './Components/About/About.js'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/'>
            <div className="body">
              <h3>My name is Edgar Lopez</h3>
              <h3>Front-end developer and UX designer</h3>
              <Link style={{textDecoration: "none", color:"inherit"}} to={'/projects'}>
                  <button>See Work</button>
              </Link>
            </div>
          </Route>

          <Route path='/projects'>
            <ProjectGrid/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/nature-stewards'>
            <NatureStewards/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
