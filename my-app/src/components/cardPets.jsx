import React from "react"; 
import "../styles/stylePrincipalAdocaoPet.css"
import img1 from "../images/adocao1.jpg"
import img2 from "../images/adocao2.jfif"
import img3 from "../images/adocao3.png"

export default function Card(props) {

    return (
        <div className="table-responsive-stack">      
            <table >
                <tr>
                    <th >
                         <div className="card card2">
                         <img src={img2} className="card-img-top" alt="Cachorro1"/>
                         <div className="card-body">
                          <h5 className="card-title">Zeus</h5>
                          <p className="card-text">Zeus foi encontrado na rua Maracanã, ele possui 2 anos, super docil</p>
                          <br></br>
                          <button className="button">Adotar </button>
                        </div>
                      </div>
                    </th>

                    <th > 
                        <div className="card card2">
                        <img src={img2}  className="card-img-top" alt="Cachorro1"/>
                        <div className="card-body">
                          <h5 className="card-title">Zeus</h5>
                          <p className="card-text">Zeus foi encontrado na rua Maracanã, ele possui 2 anos, super docil</p>
                          <br></br>
                          <button className="button">Adotar </button>
                        </div>
                      </div> 
                    </th> 

                    <th > 
                        <div className="card card2">
                            <img src={img2} className="card-img-top" alt="cachorro2"/>
                            <div className="card-body">
                                <h5 className="card-title">luna</h5>
                                <p className="card-text">Luna é uma cachorra super carinhosa e adora ficar junto do seu dono</p>
                                <br></br>
                                <button className="button">Adotar </button>
                            </div>
                         </div>
                    </th> 
                </tr>
            </table>

            <table>
                <tr>
                    <th >
                         <div className="card card2">
                         <img src={img2} className="card-img-top" alt="Cachorro1"/>
                         <div className="card-body">
                          <h5 className="card-title">Zeus</h5>
                          <p className="card-text">Zeus foi encontrado na rua Maracanã, ele possui 2 anos, super docil</p>
                          <br></br>
                          <button className="button">Adotar </button>
                        </div>
                      </div>
                    </th>

                    <th > 
                        <div className="card card2">
                        <img src={img2}  className="card-img-top" alt="Cachorro1"/>
                        <div className="card-body">
                          <h5 className="card-title">Zeus</h5>
                          <p className="card-text">Zeus foi encontrado na rua Maracanã, ele possui 2 anos, super docil</p>
                          <br></br>
                          <button className="button">Adotar </button>
                        </div>
                      </div> 
                    </th> 

                    <th > 
                        <div className="card card2">
                            <img src={img2} className="card-img-top" alt="cachorro2"/>
                            <div className="card-body">
                                <h5 className="card-title">luna</h5>
                                <p className="card-text">Luna é uma cachorra super carinhosa e adora ficar junto do seu dono</p>
                                <br></br>
                                <button className="button">Adotar </button>
                            </div>
                         </div>
                    </th> 
                </tr>
            </table>

            <table>
                <tr>
                    <th className=" ">
                         <div className="card card2">
                         <img src={img2} className="card-img-top" alt="Cachorro1"/>
                         <div className="card-body">
                          <h5 className="card-title">Zeus</h5>
                          <p className="card-text">Zeus foi encontrado na rua Maracanã, ele possui 2 anos, super docil</p>
                          <br></br>
                          <button className="button">Adotar </button>
                        </div>
                      </div>
                    </th>

                    <th > 
                        <div className="card card2">
                        <img src={img2}  className="card-img-top" alt="Cachorro1"/>
                        <div className="card-body">
                          <h5 className="card-title">Zeus</h5>
                          <p className="card-text">Zeus foi encontrado na rua Maracanã, ele possui 2 anos, super docil</p>
                          <br></br>
                          <button className="button">Adotar </button>
                        </div>
                      </div> 
                    </th> 

                    <th > 
                        <div className="card card2">
                            <img src={img2} className="card-img-top" alt="cachorro2"/>
                            <div className="card-body">
                                <h5 className="card-title">luna</h5>
                                <p className="card-text">Luna é uma cachorra super carinhosa e adora ficar junto do seu dono</p>
                                <br></br>
                                <button className="button">Adotar </button>
                            </div>
                         </div>
                    </th> 
                </tr>
            </table>


    </div>   
    )
}
