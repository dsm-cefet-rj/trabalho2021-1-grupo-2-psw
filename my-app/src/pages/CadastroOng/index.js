import React from 'react';
import Field from "../../components/Field";
import CheckBox from "../../components/CheckBox";
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'

import { useState } from 'react';
export default function CadastroOng () {


    function cadastrarUsuario(e){
      e.preventDefault();
      console.log('Usuario cadastrado')
      console.log(name)
      
    }

    const [name,setName] = useState()

    return ( 
      <div><Header/><br></br><br></br>
        <div className = "App" id="main-container">
          <h1>Cadastro ONG</h1>
          <form onSubmit={cadastrarUsuario} id="regiter-htmlForm">
            <Field box="full-box" htmlFor="email" labeltext="E-mail" type="email" name="email" id="email" placeholder="Digite seu e-mail"/>

            <Field box="half-box spacing" htmlFor="name" labeltext="Nome" type="text" name="name" id="name" placeholder="Digite o nome da ONG"/>

            <Field box="half-box" htmlFor="cnpj" labeltext="CNPJ da ONG" type="cnpj" name="cnpj" id="cnpj" placeholder="Digite o CNPJ da ONG"/>

            <Field box="half-box spacing" htmlFor="password" labeltext="Senha" type="password" name="password" id="password" placeholder="Digite a sua senha"/>

            <Field box="half-box" htmlFor="passwordconfirmation" labeltext="Confirme a sua senha" type="password" name="passwordconfirmation" id="passwordconfirmation" placeholder="Confirme a sua senha"/>

            <CheckBox box="full-box" htmlFor="agreement" labeltext="Eu li e aceito os termos de uso" type="checkbox" name="agreement" id="agreement-label"/>

            <CheckBox box="full-box" type="submit" value="Registrar" id="btn-submit"/>        
          </form>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer/>
      </div>
    );
}