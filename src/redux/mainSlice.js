import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,  
  reducers: {
    setValue: (state, action) => {      
      state.value = action.payload;
    },    
  }  
});

export const { setValue } = mainSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectValue = (state) => state.counter.value;


export default mainSlice.reducer;
