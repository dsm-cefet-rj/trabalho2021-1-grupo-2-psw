import React from 'react';
import Field from "../../components/Field";
import CheckBox from "../../components/CheckBox";
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'


export default function CadastroOng () {
    return ( 
      <div><Header/><br></br><br></br>
        <div className = "App" id="main-container">
          <h1>Cadastro ONG</h1>
          <form id="regiter-form">
            <Field box="full-box" for="email" labeltext="E-mail" type="email" name="email" id="email" placeholder="Digite seu e-mail"/>

            <Field box="half-box spacing" for="name" labeltext="Nome" type="text" name="name" id="name" placeholder="Digite o nome da ONG"/>

            <Field box="half-box" for="cnpj" labeltext="CNPJ da ONG" type="cnpj" name="cnpj" id="cnpj" placeholder="Digite o CNPJ da ONG"/>

            <Field box="half-box spacing" for="password" labeltext="Senha" type="password" name="password" id="password" placeholder="Digite a sua senha"/>

            <Field box="half-box" for="passwordconfirmation" labeltext="Confirme a sua senha" type="password" name="passwordconfirmation" id="passwordconfirmation" placeholder="Confirme a sua senha"/>

            <CheckBox box="full-box" for="agreement" labeltext="Eu li e aceito os termos de uso" type="checkbox" name="agreement" id="agreement-label"/>

            <CheckBox box="full-box" type="submit" value="Registrar" id="btn-submit"/>        
          </form>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer/>
      </div>
    );
}