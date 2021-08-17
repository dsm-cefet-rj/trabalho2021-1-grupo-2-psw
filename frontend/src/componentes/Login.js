import React from 'react'


export class Login extends React.Component{
    render (){
        return(
        <div id="login-container">
            <h1> Login</h1>
            <form action>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Digite seu email:" autoComplete="off" />
              <label htmlFor="password">Senha</label>
              <input type="password" name="password" id="password" placeholder="Digite sua senha" />
              <a href="#" id="forgot- pass">Esqueceu a senha?</a>
              <input type="submit" defaultValue="Login" />
            </form>
            <div id="register-container">
              <p>Ainda não tem uma conta?</p>
              <a href="#">Registrar</a>
            </div>
          </div>
        );
    }
}