import React from 'react'
import { Jumbotron } from '../../components/Jumbotron'
import { Cards } from '../../components/Cards'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

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