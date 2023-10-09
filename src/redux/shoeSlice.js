// shoeSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  shoes: [
    {
      id: 1,
      brand: 'Nike',
      size: '9',
      cost: '100',
      imageLink:
        'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png',
    },
    {
      id: 2,
      brand: 'Adidas',
      size: '8',
      cost: '90',
      imageLink:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78b76ab3632d4251a7f2ae2b005fb600_9366/Grand_Court_TD_Lifestyle_Court_Casual_Shoes_White_GW9250_01_standard.jpg',
    },
    {
      id: 3,
      brand: 'Puma',
      size: '8',
      cost: '100',
      imageLink:
        'https://assets.myntassets.com/h_480,q_100,w_360/v1/assets/images/17663228/2022/8/5/cf097a4c-72b9-4778-9c52-43bbbdc0dd251659695275165-Puma-Men-White-Woven-Design-City-Running-Shoes-2921659695274-1.jpg',
    },
  ], // Array to store shoe information
};

const shoeSlice = createSlice({
  name: 'shoes',
  initialState,
  reducers: {
    addShoe: (state, action) => {
      state.shoes.push(action.payload);
    },
    editShoe: (state, action) => {
      // Edit an existing shoe by ID
      const {id, brand, size, cost} = action.payload;
      const shoeToEdit = state.shoes.find(shoe => shoe.id === id);

      if (shoeToEdit) {
        shoeToEdit.brand = brand;
        shoeToEdit.size = size;
        shoeToEdit.cost = cost;
      }
    },
    deleteShoe: (state, action) => {
      // Delete a shoe by ID
      const {id} = action.payload;
      state.shoes = state.shoes.filter(shoe => shoe.id !== id);
    },
  },
});

export const {addShoe, editShoe, deleteShoe} = shoeSlice.actions;
export const selectShoes = state => state.shoes.shoes;
export default shoeSlice.reducer;
