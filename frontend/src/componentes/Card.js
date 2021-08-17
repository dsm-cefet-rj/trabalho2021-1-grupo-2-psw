import React from 'react'
import adocao1 from '../adocao1.jpg'
import adocao3 from '../adocao3.jpg'
import adocao4 from '../adocao4.jpg'






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
        </div>
        );
    };
}