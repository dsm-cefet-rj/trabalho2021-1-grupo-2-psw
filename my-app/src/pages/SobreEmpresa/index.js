import React from 'react'
import { AboutUs } from '../../components/AboutUs';
import { Jumbotron } from '../../components/Jumbotron'
import { Cards } from '../../components/Cards'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'


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