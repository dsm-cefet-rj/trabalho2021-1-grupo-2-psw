import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export class Jumbotron extends React.Component{
    render(){
        return(
            <div className="jumbotron pb-1 pt-1">
                <div className="jumbotron__container">
                <h3 className="primary-color"> Mais que um amigo </h3>
                <h4 className="lead">Encontre um Pet próximo a você</h4>
                <p className="lead">
                    <Link to="/" className="btn btn-light btn-lg">Encontre ele </Link>
                </p>
                </div>
          </div>
        );
    }
}