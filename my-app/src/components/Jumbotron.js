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
            <div class="jumbotron pb-1 pt-1">
                <div class="jumbotron__container">
                <h3 class="primary-color"> Mais que um amigo </h3>
                <h4 class="lead">Encontre um Pet próximo a você</h4>
                <p class="lead">
                    <Link to="/" class="btn btn-light btn-lg">Encontre ele </Link>
                </p>
                </div>
          </div>
        );
    }
}