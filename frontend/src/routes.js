import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Main from './pages/Main'
import Contato from './pages/Contato'
import SobreEmpresa from './pages/SobreEmpresa'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path= "/" exact component={Main}/>
                <Route path= "/login"  component={Contato}/>
                <Route path= "/sobre"  component={SobreEmpresa}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;