import React from 'react'
import adocao1 from '../images/adocao1.jpg'
import adocao3 from '../images/adocao2.jfif'
import adocao4 from '../images/adocao3.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Card extends React.Component{
    render(){
        return(
        <div className="container-fluid pb-3">
            <div className="row mb-3 "style={{width:'100%'}}>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card cardAdopt">
                      <img src={adocao1} alt="Cachorro1" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Nome: Zeus</h3>
                          <p className="card-text">Idade: 6 meses</p>
                          <p className="card-text">Raça: Vira-Lata</p>
                          <p className="card-text">Vacinação: Em dia</p>
                          <p className="card-text">Características: Alegre, parceiro, carinhoso</p>
                          <Link to="/" class="btn btn-primary btn-lg btnPosit">Confirmar Adoção</Link>
                      </div>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        );
    };
}