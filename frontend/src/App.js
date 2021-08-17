import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

import { Header } from './componentes/Header';
import { Cards } from './componentes/Cards';
import{Footer} from './componentes/Footer'
import {Jumbotron} from './componentes/Jumbotron'
import Routes from './routes'
function App() {
    return (
        <div>
            <Routes/>
        </div>

    );


}

export default App;
