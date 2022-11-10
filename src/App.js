// IMPORT

import logo from './logo.svg';
import './App.css';
// import React from 'react';
import ReactDOM from 'react-dom/client';

// FUNCTION APP (show on DOM on )

function App() {
  return (
  <div className="App">
      <header className="App-header">
      <div id="backgroundBLACK" className="text-center">
    <h1 id="headerAPP" className="display-1">Planetary Info</h1>
    <p id="headerAPP" className="lead">This APP will let you understand a few things about our Solar System</p>
    <div className="text-center">
        <div className="container-fluid text-center" id="nav_container">
            <button className="btn btn-dark" name="index"
                id="btn_home">Home</button>
            <button className="btn btn-dark" name="planet_info"
                id="btn_planet">Local Solar System info</button>

            <button className="btn btn-dark" name="functions"
                id="btn_func">Functions</button>
            <button className="btn btn-dark active"  name="store"
                id="btn_store">Store</button>
        </div>
    
    <button className="btn btn-dark"  name="telescopes"
                id="btn_telescope">Telescopes</button>
            <button className="btn btn-dark"  name="filters"
                id="btn_filters">Filters</button>
            <button className="btn btn-dark active"  name="accesories"
                id="btn_accesories">Accesories</button>
                
    <div className="container">
        <div className="row">
           
            <div className="col" id="prodColStore1">
            </div></div></div></div></div>
      </header>
    </div>
  );
}

// TEST

let chooseNumber = Math.random() * 100
let finalNumber = parseInt(chooseNumber)
let prod = <a>{finalNumber}</a>
let titulo = "Luis"
console.log(finalNumber);
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root2.render(titulo);
root3.render(prod)


export default App;
