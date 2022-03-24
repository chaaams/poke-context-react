import React from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import { Routes, Route, Link } from "react-router-dom"; 


function App() {
  return (
    <div className="App ">
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav> */}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Poke-context</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/' className="nav-link" aria-current="page" href="#">Home</Link>
            <Link to='/Login' className="nav-link" href="#">Login</Link>  
          </div>
        </div>
      </div>
    </nav>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      
      {/* <Home/>
      <Login/>  */}
    </div>
  );
}

export default App;
