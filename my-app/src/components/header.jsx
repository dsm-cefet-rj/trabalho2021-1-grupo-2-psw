import React from "react"; 
import "../styles/stylePrincipalAdocaoPet.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (

<nav className="footer navbar-expand-lg fixed-top bg-primary-color" id="footer">
    <div className="container py-3">
        <a className="navbar-brand primary-color">
            <span>PetFriend</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" 
            aria-controls="navbar-items" aria-expanded="false" aria-label="toggle navagation">
            <i className="bi bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbar-items">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active primary-color" aria-current="page"> Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link primary-color" > Perfil do usuario</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link primary-color" > Centro de adoções </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link primary-color" > Minhas adoções </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link primary-color" > Cadastre seu Pet </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    )
}
