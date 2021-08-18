import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

import { Header } from './components/Header';
import { Cards } from './components/Cards';
import{Footer} from './components/Footer'
import {Jumbotron} from './components/Jumbotron'
import Routes from './routes'
function App() {
    return (
        <div>
            <Routes/>
        </div>

    );


}

export default App;
