import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header title = { "Mercado Livre" } /> 
      <Router>
          <Routes />
      </Router>
    </div>
  );
}

export default App;
