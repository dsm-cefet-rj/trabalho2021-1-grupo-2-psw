import React from 'react'
import adocao1 from '../images/adocao1.jpg'
import adocao3 from '../images/adocao2.jfif'
import adocao4 from '../images/adocao3.png'

export class Cards extends React.Component{
    render(){
        return(
        <div className="container-fluid  pb-3 ">
            <div className="row mb-3"style={{width:'100%'}}>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro1" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Zeus</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <a href="" className="btn btn-dark btn-md">Adote</a>
                      </div>
                    </div>
                </div>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao3} alt="Cachorro2" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Lola</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <a href="" className="btn btn-dark btn-md">Adote</a>
                      </div>
                  </div>
              </div>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro2" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Bilu</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <a href="" className="btn btn-dark btn-md">Adote</a>
                      </div>
                  </div>
              </div>
      
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro2" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Bolo</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <a href="" className="btn btn-dark btn-md">Adote</a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao3} alt="Cachorro4" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Thor</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <a href="" className="btn btn-dark btn-md">Adote</a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-4 mt-4">
                  <div className="card">
                      <img src={adocao1} alt="Cachorro5" className="card-img-top"/>
                      <div className="card-body">
                          <h3 className="card-title">Hulk</h3>
                          <p className="card-text">Cachorro docil com apenas 6 meses.</p>
                          <a href="" className="btn btn-dark btn-md">Adote</a>
                      </div>
                  </div>
              </div>
            </div>
      
        </div>
        );
    }
}