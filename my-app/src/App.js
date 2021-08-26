import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import React from 'react'
import { fetchPets } from './PetsSlice';
import Routes from './routes'
import {Provider} from 'react-redux'
import {store} from './store'

store.dispatch(fetchPets());
function App() {






    return (<>

            <Provider store={store}>
            <Routes/>
            </Provider> 
        
    </>);


}

export default App;
