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

function Cards (props){
        return(
            <div className="container-fluid  pb-3 ">
            <div className="row mb-3"style={{width:'100%'}}>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro1" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Thor</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <Link to="/adotar/id:1" className="btn btn-primary btn-md">Adote</Link>
                      </div>
                    </div>
                </div>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao3} alt="Cachorro2" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Lola</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <Link to="/adotar/id:2" className="btn btn-primary btn-md">Adote</Link>
                      </div>
                  </div>
              </div>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro2" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Bilu</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <Link to="/adotar/id:3" className="btn btn-primary btn-md">Adote</Link>
                      </div>
                  </div>
              </div>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro2" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Bolo</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <Link to="/adotar/id:4" className="btn btn-primary btn-md">Adote</Link>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao3} alt="Cachorro4" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Thor</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <Link to="/adotar/id:5" className="btn btn-primary btn-md">Adote</Link>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro5" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Hulk</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <Link to="/adotar/id:6" className="btn btn-primary btn-md">Adote</Link>
                      </div>
                  </div>
              </div>
            </div>
      
        </div>
        );
}
export default Cards