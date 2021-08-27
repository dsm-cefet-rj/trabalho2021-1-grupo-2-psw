import React from 'react'
import { Jumbotron } from '../../components/Jumbotron'
import  Cards  from '../../components/Cards'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Link, useHistory , useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'


function Main(){
   
 
     const pets = useSelector(state => state.pets)
    
     
    return(
        <div>
            <Header/>
            <Jumbotron/>
            <Cards/>
            <Footer/>
        </div>
    );
};

export default Main;