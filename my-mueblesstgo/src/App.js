import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PostJustificativoComponent from './components/PostJustificativoComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path = "/justificado" component = {PostJustificativoComponent}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
