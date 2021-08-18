import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Header extends React.Component{
    
    render(){
        return(

        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">PetFriend</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collaspe navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link to="/sobre" className="nav-link third-color" > Quem somos?</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/cadastroOng" className="nav-link third-color" > Cadastrar centro de adoções </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link third-color" > Minhas adoções </Link>
                   </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link third-color" > Cadastre seu Pet </Link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
        );
    }
}