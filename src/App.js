import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/home/HomeContainer';

const App = () => (
  <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
);

export default App;
