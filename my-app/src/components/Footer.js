import React from 'react'

export class Footer extends React.Component{
    render(){
        return(
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Dúvidas frequentes</h3>
                        </div>
                        <div class="col-sm-4 col-md-3 item">
                            <h3>Sobre</h3>
                            <ul>
                                <li><a href="#">Empresa</a></li>
                                <li><a href="#">Parceiros</a></li>
                                <li><a href="#">Objetivo</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a>
                            <p class="copyright">PetFriend © 2018</p>
                        </div>
                    </div>
                </div>
            </footer>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
        </div>
        );
    };
}