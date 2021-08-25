import React from 'react'
import { Header } from '../../components/Header'
import { Jumbotron } from '../../components/Jumbotron'
import { Footer } from '../../components/Footer'
import adocao1 from '../../images/adocao1.jpg'
import { Link, useHistory , useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { deletePet } from '../../PetsSlice';



function Adotar(){
   
        
                    const history = useHistory()
                    let { id } = useParams()
                    id = parseInt(id)

                    const pets = useSelector(state => state.pets)
                    // const pet = pets.filter(pet=>pet.id === id)[0]
                    const dispatch = useDispatch();



                    function handleDelete(e){

                        e.preventDefault()
                        dispatch(deletePet(id));
                        alert("Adoção excluida!")
                        history.push("/")
                    }


    return(

        <div>
            <Header/>
            <Jumbotron/>
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
                          <Link to="/" class="btn btn-primary btn-lg btnPosit">Contatar Centro</Link>
                          <br></br><br></br>
                          <button class="btn btn-danger btnPosit" onclick={handleDelete}>Excluir adocao</button>
                      </div>
                    </div>
                </div>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
            <Footer/>
        </div>
    );
};

export default Adotar;