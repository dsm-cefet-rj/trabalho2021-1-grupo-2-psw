import React from 'react'
import { Jumbotron } from '../../componentes/Jumbotron'
import { Cards } from '../../componentes/Cards'
import { Footer } from '../../componentes/Footer'
import { Header } from '../../componentes/Header'

function Main(){
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