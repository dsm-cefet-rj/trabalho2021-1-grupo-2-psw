import React from 'react'
import adocao1 from '../images/adocao1.jpg'
import adocao3 from '../images/adocao2.jfif'
import adocao4 from '../images/adocao3.png'

export class Card extends React.Component{
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
                      </div>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        );
    };
}