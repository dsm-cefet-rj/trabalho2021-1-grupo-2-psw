import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import React from 'react'
import FetchRandomUser from "./components/FetchPets";
import Routes from './routes'
import {Provider} from 'react-redux'
import {store} from './store'

// fetch('pets.json',
// {
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//  })
//  .then(res => res.text())   
//  .then(text => console.log(text))

// fetch("./pets").then(async response => {
//     try {
//      const data = await response.json()
//      console.log('response data?', data)
//    } catch(error) {
//      console.log('Error happened here!')
//      console.error(error)
//    }
//   })

// fetch('./pets.json', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(response => response.json())

// fetch(myJson).then(response => {
//     console.log(response);
//     return response.text()
//   }).then(text => {
//     // Work with JSON data here
//     console.log(text);
//     //console.log(data);
//   }).catch(err => {
//     console.log("Error Reading data " + err);
//   });


//store.dispatch(fetchPets());
function App() {
    return (<>

            <FetchRandomUser />
            <Provider store={store}>
            <Routes/>
            </Provider> 
        
    </>);


}

export default App;
