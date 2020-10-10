import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import Reports from './pages/Reports';
import About from './pages/About';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Switch>
    
        <Route path='/reports' component={Reports}/>
        <Route path='/about' component={About}/>
      
      </Switch>
      </Router>
     
    </div>
  );
}

export default App;
