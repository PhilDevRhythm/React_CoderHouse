// IMPORT

// import logo from './logo.svg';
import './App.css';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import planets from './components/planets';





// TEST

// FUNCTION APP (show on DOM on )

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div id="backgroundBLACK" className="text-center">
                    <h1 id="headerAPP" className="display-1">Planetary Info</h1>
                    <p id="headerAPP" className="lead">This APP will let you understand a few things about our Solar System</p>
                    <div className="text-center" id="main">
                        <div className="container-fluid text-center" id="nav_container">
                            <button className="btn btn-dark p-2" name="index"
                                id="btn_home">Home</button>
                            <button className="btn btn-dark p-2" onClick={planets} name="planet_info"
                                id="btn_planet">Local Solar System info</button>

                            <button className="btn btn-dark p-2" name="functions"
                                id="btn_func">Functions</button>
                            <button className="btn btn-dark active p-2" name="store"
                                id="btn_store">Store</button>
                        </div>
                        
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
// root2.render(titulo);
root2.render(prod)



export default App;
