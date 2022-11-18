import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PostJustificativoComponent from './components/PostJustificativoComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
          <div className='container'>
            <Switch>
              <Route path = "/justificado" component={PostJustificativoComponent}></Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
