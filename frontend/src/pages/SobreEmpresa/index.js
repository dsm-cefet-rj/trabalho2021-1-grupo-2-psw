import React from 'react'
import { AboutUs } from '../../componentes/AboutUs';
import { Jumbotron } from '../../componentes/Jumbotron'
import { Cards } from '../../componentes/Cards'
import { Footer } from '../../componentes/Footer'
import { Header } from '../../componentes/Header'


function SobreEmpresa(){
    return(
        <>
        <Header/>
        <AboutUs/>
        <Footer/>
        </>
    );
};

export default SobreEmpresa;