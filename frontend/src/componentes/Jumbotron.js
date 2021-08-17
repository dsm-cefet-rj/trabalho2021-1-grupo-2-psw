import React from 'react';


export class Jumbotron extends React.Component{
    render(){
        return(
            <div class="jumbotron pb-4 pt-2">
                <div class="jumbotron__container">
                <h2 class="display-4"> Mais que um amigo </h2>
                <p class="lead">Encontre um Pet próximo a você</p>
                <p class="lead">
                    <a href="#" class="btn btn-warning btn-lg">Encontre ele </a>
                </p>
                </div>
          </div>
        );
    }
}