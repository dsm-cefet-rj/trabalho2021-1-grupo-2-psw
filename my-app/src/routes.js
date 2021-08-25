import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Main from './pages/Main'
import Contato from './pages/Contato'
import SobreEmpresa from './pages/SobreEmpresa'
import Adotar from './pages/Adotar'
import CadastroOng from './pages/CadastroOng'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/"  exact component={Main}/>
                <Route path= "/login"   component={Contato}/>
                <Route path= "/sobre"   component={SobreEmpresa}/>
                <Route path= "/adotar"    component={Adotar}/>
                <Route path= "/cadastroOng"  component={CadastroOng}/>            
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;