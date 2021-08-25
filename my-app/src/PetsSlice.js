import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';



const initialPets =[
        {

          id:1,
          name: 'Bilu',
          images: [],
          description: "Foi resgatado no cefet",
          status: "disponivel",
          supplier: "Tribo do Abraço",
          location: "Tijuca",
        },














]

function addPetReducer(pets, pet){
    let proxId = 1 + pets.map(pet => pet.id).reduce((x, y) => Math.max(x,y));
    return pets.concat([{...pet, id: proxId}]);
  }

  function deletePetReducer(pets, id){
    return pets.filter((pet) => pet.id !== id);  
  }

  function updatePetReducer(pets, pet){
    let index = pets.map(pet => pet.id).indexOf(pet.id);
    pets.splice(index, 1, pet);
    return pets;
  }

  

  export const petsSlice = createSlice({
        name: "pets",
        initialState: initialPets,
        reducers: {
           addPet: (state, action) => addPetReducer(state, action.payload),
           updatePet: (state, action) => updatePetReducer(state, action.payload),
           deletePet: (state, action) => deletePetReducer(state, action.payload)
        },
    })

export const { addPet, updatePet, deletePet } = petsSlice.actions
export default petsSlice.reducer