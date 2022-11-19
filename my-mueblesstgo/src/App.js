import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PostJustificativoComponent from './components/PostJustificativoComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent></HeaderComponent>
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
