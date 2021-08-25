import { configureStore } from '@reduxjs/toolkit'
import  petsReducer from './PetsSlice'


export const store = configureStore({
    reducer: {
        pets: petsReducer, 
        
     /*aqui poderiam entrar mais reducers, um por chave do mapa */
    }
})