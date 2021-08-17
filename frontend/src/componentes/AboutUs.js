import React from 'react'
import adocao1 from '../adocao1.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



export class AboutUs extends React.Component{
    render(){
        return(
        <div class="about-section">
          <div class="inner-container">
              <h1>Quem somos?</h1>
              <p class="text">
              Em tempos de pandemia e isolamento social com mais tempo em casa, mais pessoas
passaram a procurar centros de adoção de animais para buscar um novo companheiro.
Pesquisas mostram que nos primeiros meses da pandemia houve um aumento significativo no
número de adoções de cães e gatos.
Entretanto, o país vive uma enorme crise social e econômica, muitas pessoas perderam seus
empregos e adivinhe o que aconteceu com os cães e gatos adotados? Muitos foram devolvidos
para os centros de adoção ou até mesmo abandonados novamente.
Após a vacinação de grande parte da população adulta e a retomada da economia é possível
escolher um pet para adoção no conforto de casa, o Adopet faz a ponte entre os centros de
adoção e pessoas que gostariam de adotar um pet.
              </p>
          </div>
      </div>
        );
    }
}